const os = require('os');

module.exports = function (grunt) {
  const home = os.homedir();
  const esoHome = `${home}/Documents/Elder Scrolls Online`;
  const addonFolder = `${esoHome}/live/AddOns`;
  const savedVarsLocation = `${esoHome}/live/SavedVariables/Provinatus.lua`
  grunt.initConfig({
    clean: {
      build: [`${addonFolder}/Provinatus`],
      savedVars: [savedVarsLocation],
      release: ['Provinatus.zip'],
      options: {
        force: true
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: './Provinatus',
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
            dest: `${addonFolder}/Provinatus`
          }
        ],
      }
    },
    compress: {
      main: {
        options: {
          archive: 'Provinatus.zip'
        },
        files: [
          { cwd: `${addonFolder}`, src: [`Provinatus/**`], dest: './' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-compress');
}