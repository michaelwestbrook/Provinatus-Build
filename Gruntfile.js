const provinatusConfig = require('./config');
module.exports = function (grunt) {
  const modName = 'Provinatus';
  grunt.initConfig({
    clean: {
      build: [grunt.option('provinatusFolder')],
      savedVars: [grunt.option('savedVarsLocation')],
      release: [`${grunt.option('releaseFolder')}/${modName}.zip`],
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
              'debug/**',
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
            dest: `${grunt.option('releaseFolder')}/${modName}`
          }
        ],
      }
    },
    compress: {
      main: {
        options: {
          archive: `${grunt.option('releaseFolder')}/${modName}.zip`
        },
        files: [
          { expand: true, cwd: grunt.option('provinatusFolder'), src: ['./**'], dest: 'Provinatus' }
        ]
      }
    },
    replace: {
      version: {
        src: [`${grunt.option('releaseFolder')}/${modName}/function/LAM2Panel.lua`],
        dest: `${grunt.option('releaseFolder')}/${modName}/function/LAM2Panel.lua`,
        replacements: [{
          from: '{{**DEVELOPMENTVERSION**}}',
          to: provinatusConfig.version
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-text-replace');
}
