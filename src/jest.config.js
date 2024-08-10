// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom', // Specify the correct environment
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TypeScript files
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for JavaScript and JSX
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS files
    },
  };