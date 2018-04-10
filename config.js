const provinatusConfig = {
  version: process.env['BUILD_BUILDNUMBER'] ? process.env['BUILD_BUILDNUMBER']  : 'local-build'
};

module.exports = provinatusConfig
