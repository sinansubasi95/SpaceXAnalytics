module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@/utils/(.*)': '<rootDir>/src/utils/$1',
  },
};