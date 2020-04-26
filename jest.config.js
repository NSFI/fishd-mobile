module.exports = {
  setupFiles: ['./source/tests/setup.js'],
  // collectCoverage: true,
  collectCoverageFrom: ['source/components/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/source/tests/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
