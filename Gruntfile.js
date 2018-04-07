const os = require('os');

module.exports = function (grunt) {
  const modName = 'Provinatus'
  const esoHome = `${os.homedir()}/Documents/Elder Scrolls Online`;
  const addonFolder = `${esoHome}/live/AddOns`;
  const provinatusFolder = `${addonFolder}/${modName}`
  const savedVarsLocation = `${esoHome}/live/SavedVariables/${modName}.lua`
  grunt.initConfig({
    clean: {
      build: [provinatusFolder],
      savedVars: [savedVarsLocation],
      release: [`${modName}.zip`],
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
            dest: `${addonFolder}/${modName}`
          }
        ],
      }
    },
    compress: {
      main: {
        options: {
          archive: `${modName}.zip`
        },
        files: [
          { cwd: `${addonFolder}`, src: [`${modName}/**`], dest: './' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-compress');
}
