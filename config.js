const defaultBuildDir = 'build';
const defaultReleaseDir = 'release';
const defaultDeployDir = defaultBuildDir;
const provinatusConfig = {
  modName: "Provinatus",

  // BUILD_BUILDNUMBER should be provided by VSTS, otherwise 'local-build'.
  version: getVersionNumber(),
  buildFolder: defaultBuildDir,
  releaseFolder: defaultReleaseDir,

  // Set addon directory in environment vars or set default above. Mine is set to 'C:\\Users\\Mike\\Documents\\Elder Scrolls Online\\live\\AddOns'
  esoAddonDir: process.env['ESO_ADDON_DIR'] || defaultBuildDir,
  luaFilesToLint: ['./Provinatus/**/*.lua', '!./Provinatus/lang/**']
};

function getVersionNumber() {
  const d = new Date();
  const minutes = d.getMinutes();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const df = `${d.getDate()}-${monthNames[d.getMonth()]}-${d.getFullYear()}T${(d.getHours())}-${minutes < 10 ? `0${minutes}` : minutes}-${d.getSeconds()}`;
  console.log(`Generated version number ${process.env['BUILD_BUILDNUMBER'] ? process.env['BUILD_BUILDNUMBER'] : df}.`);
  return df;
}

module.exports = provinatusConfig
