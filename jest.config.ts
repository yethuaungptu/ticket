/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['<rootDir>/**/*.test.ts']
};
