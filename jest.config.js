module.exports = {
  collectCoverage: false,
  moduleFileExtensions: ['js', 'json', 'vue'],
  testURL: 'http://localhost',
  transform: {
    '^.+.js$': 'babel-jest',
    '.*.(vue)$': 'vue-jest',
  },
  verbose: false,
}
