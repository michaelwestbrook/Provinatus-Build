const provinatusConfig = {
  version: process.env['Build.BuildNumber'] ? process.env['Build.BuildNumber'] : 'local-build'
};

module.exports = provinatusConfig
