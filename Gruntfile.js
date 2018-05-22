const provinatusConfig = require('./config');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: [`${provinatusConfig.buildFolder}/${provinatusConfig.modName}`],
      release: [`${provinatusConfig.releaseFolder}/${provinatusConfig.modName}`],
      deploy: [`${provinatusConfig.esoAddonDir}/${provinatusConfig.modName}`],
      options: {
        force: true
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: `${provinatusConfig.modName}`,
            src: [
              'function/**',
              'lang/**',
              'lib/LibAddonMenu-2.0/LibAddonMenu-2.0/**',
              'lib/LibAddonMenu-2.0/LibStub/**',
              'lib/LibAddonMenu-2.0/LibAddonMenu-2.0.txt',
              'reticles/**',
              'Bindings.xml',
              'config.lua',
              'CrownPointerThing.lua',
              'CrownPointerThing.xml',
              'header.lua',
              'Provinatus.txt',
              'TeamFormation.lua',
              'TeamFormation.xml',
              'ZOSDisclosure.txt'
            ],
            dest: `${provinatusConfig.buildFolder}/${provinatusConfig.modName}`
          }
        ],
      },
      deploy: {
        files: [
          {
            expand: true,
            cwd: provinatusConfig.buildFolder,
            src: [`${provinatusConfig.modName}/**`],
            dest: provinatusConfig.esoAddonDir
          }
        ]
      }
    },
    compress: {
      release: {
        options: {
          archive: `${provinatusConfig.releaseFolder}/${provinatusConfig.modName}.zip`
        },
        files: [
          // Copy everything in build directory.
          { expand: true, cwd: provinatusConfig.buildFolder, src: [`./**`] }
        ]
      },
      addons: {
        options: {
          archive: `./addon-backup/${provinatusConfig.version}.zip`
        },
        files: [
          // Copy everything in build directory.
          { expand: true, cwd: provinatusConfig.esoAddonDir, src: [`./**`] }
        ]
      }
    },
    replace: {
      version: {
        src: [`${provinatusConfig.buildFolder}/${provinatusConfig.modName}/${provinatusConfig.modName}.txt`, `${provinatusConfig.buildFolder}/${provinatusConfig.modName}/function/LAM2Panel.lua`],
        overwrite: true,
        replacements: [{
          from: '{{**DEVELOPMENTVERSION**}}',
          to: grunt.option('versionNumber') ? grunt.option('versionNumber') : provinatusConfig.version
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.registerTask('lint', function () {
    const done = this.async();
    const errors = [];
    // Run `luac` on lua files to catch simple syntax errors before.
    const luacPromises = grunt.file.expand(provinatusConfig.luaFilesToLint).map(luaFile => {
      return exec(`luac -p ${luaFile}`)
        .catch(e => errors.push(e));
    });
    return Promise.all(luacPromises)
      .then(() => {
        if (errors.length > 0) {
          grunt.fail.fatal(JSON.stringify(errors.map(error => error.stderr), null, 2));
        }
        done();
      });
  });
}