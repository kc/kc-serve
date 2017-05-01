module.exports = function(config){
  config.set({
    files: [
        // Add your files here, this is just an example:
        { pattern: 'src/**/*.js', mutated: true, included: false},
        '!src/index.js',
        'test/**/*.js',
        { pattern: 'test/test_data/**/*', mutated: false, included: false },
        { pattern: 'src/template/*', mutated: false, included: false },
        { pattern: 'src/theme/*', mutated: false, included: false },
    ],
    testRunner: 'mocha',
    testFramework: 'mocha',
    coverageAnalysis: 'all',
    reporter: ['clear-text', 'html', 'progress']
  });
}
