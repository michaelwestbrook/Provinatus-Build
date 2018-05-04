const defaultBuildDir = 'build';
const defaultReleaseDir = 'release';
const defaultDeployDir = defaultBuildDir;
const provinatusConfig = {
  modName: "Provinatus",

  // BUILD_BUILDNUMBER should be provided by VSTS, otherwise 'local-build'.
  version: process.env['BUILD_BUILDNUMBER']  || 'local-build',
  buildFolder: defaultBuildDir,
  releaseFolder: defaultReleaseDir,

  // Set addon directory in environment vars or set default above. Mine is set to 'C:\\Users\\Mike\\Documents\\Elder Scrolls Online\\live\\AddOns'
  esoAddonDir: process.env['ESO_ADDON_DIR'] || defaultBuildDir
};

module.exports = provinatusConfig
