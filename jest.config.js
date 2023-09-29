module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs'
  }
}
