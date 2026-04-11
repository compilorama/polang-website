import { fileURLToPath, URL } from 'node:url'

export default {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.styl$': 'identity-obj-proxy',
    '^@src/(.*)$': fileURLToPath(new URL('./src/$1', import.meta.url))
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
