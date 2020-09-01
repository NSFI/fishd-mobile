module.exports = {
  setupFiles: ['./source/tests/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/es/', '/lib/', '/dist/', '/site/'],
  // collectCoverage: true,
  collectCoverageFrom: ['source/components/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/source/tests/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\iconfont.js$': '<rootDir>/source/tests/fileMock.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'md'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.md$': '<rootDir>/source/tests/markdownDemoTransformer.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
      tsConfig: 'tsconfig.json',
    },
  },
};
