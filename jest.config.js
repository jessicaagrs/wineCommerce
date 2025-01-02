const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
});

module.exports = jestConfig;
