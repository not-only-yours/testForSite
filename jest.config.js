module.exports = {
    collectCoverage: true,
    transform: { '\\.js$': 'babel-jest', },
    testMatch: [
        '<rootDir>/src/test.js'
    ]
};
