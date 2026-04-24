const path = require('node:path')

module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(mp4|webm)$': '<rootDir>/src/mocks/video.cjs',
    '\\.styl$': 'identity-obj-proxy',
    '^@src/(.*)$': path.resolve(__dirname, 'src/$1'),
    // This aliases are necessary only for @compilorama/polang local installs.
    // They're not needed when installing @compilorama/polang from NPM
    '^react$': path.resolve(__dirname, 'node_modules/react/index.js'),
    '^react/(.*)$': path.resolve(__dirname, 'node_modules/react/$1'),
    '^react-dom$': path.resolve(__dirname, 'node_modules/react-dom/index.js'),
    '^react-dom/(.*)$': path.resolve(__dirname, 'node_modules/react-dom/$1'),
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-router)/)'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.test.js'],
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100
    }
  }
}
