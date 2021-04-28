module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks.ts',
    '\\.(css|less|scss|html)$': '<rootDir>/test/mocks.ts',
    '^@(Test)(.*)$': '<rootDir>/test/$2',
    '^@(Server)(.*)$': '<rootDir>/server/$2',
    '^@([A-Z].*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/pages/_*.js',
    '!coverage/**',
    '!src/.next/**',
    '!server/**',
    '!src/utils/with-redux-store.js',
    '!<rootDir>/next.config.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/.next',
    '<rootDir>/node_modules/',
    '<rootDir>/next.config.js',
    '<rootDir>/coverage/',
    '<rootDir>/server/',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: 'tests/.*\\.test\\.js$',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-dom-extend-expect'],
  snapshotSerializers: [],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: ['/node_modules/', '/server/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  preset: 'ts-jest',
};
