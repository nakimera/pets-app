module.exports = {
    preset: 'ts-jest',
    testEnvironment: "<rootDir>/jest-environment-jsdom.js",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.(svg|jpeg)$": "jest-transform-stub",
    },
    setupFilesAfterEnv: ['<rootDir>/stepupTest.js']
  };
