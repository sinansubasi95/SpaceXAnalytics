const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};

// const { pathsToModuleNameMapper } = require('ts-jest/utils');

// const { compilerOptions } = require('./tsconfig.json')
// console.log(pathsToModuleNameMapper(compilerOptions.paths))
// module.exports = {
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
//   setupFilesAfterEnv: ['./jest.setup.js']
// };

// {
//   '^@components/(.*)$': 'src/components/$1',
//   '^@interfaces/(.*)$': 'src/interfaces/$1',
//   '^@utils/(.*)$': 'src/utils/$1'
// }