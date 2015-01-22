exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: true
  }
};
