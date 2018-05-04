const provinatusConfig = require('./config');

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
      }
    },
    replace: {
      version: {
        src: [`${provinatusConfig.buildFolder}/**`],
        overwrite: true,
        replacements: [{
          from: '{{**DEVELOPMENTVERSION**}}',
          to: provinatusConfig.version
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-text-replace');
}