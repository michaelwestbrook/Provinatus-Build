const provinatusConfig = require('./config');

module.exports = function (grunt) {
  const modName = 'Provinatus';

  function getReleaseFolder() {
    return grunt.option('releaseFolder') ? grunt.option('releaseFolder') : 'build';
  }

  grunt.initConfig({
    clean: {
      build: [getReleaseFolder()],
      options: {
        force: true
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: `./${modName}`,
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
              'esoui-readme.txt'
            ],
            dest: `${getReleaseFolder()}/${modName}`
          }
        ],
      }
    },
    compress: {
      main: {
        options: {
          archive: `${getReleaseFolder()}/${modName}.zip`
        },
        files: [
          { expand: true, cwd: getReleaseFolder(), src: [`./${modName}/**`], dest: `./` }
        ]
      }
    },
    replace: {
      version: {
        src: [`${getReleaseFolder()}/${modName}/function/LAM2Panel.lua`, `${getReleaseFolder()}/${modName}/Provinatus.txt`],
        overwrite: true,
        replacements: [{
          from: '{{**DEVELOPMENTVERSION**}}',
          to: grunt.option('versionNumber') ? grunt.option('versionNumber') : provinatusConfig.version
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-text-replace');
}
