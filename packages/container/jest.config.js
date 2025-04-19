module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Updated to full package name
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Point to your setup file
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '^@material-ui/core/(.*)$': '<rootDir>/node_modules/@material-ui/core/$1',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!@material-ui)'
    ],
};