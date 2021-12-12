module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^store/(.*)': '<rootDir>/src/store/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^common/(.*)': '<rootDir>/src/common/$1',
    '^hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^materialUI/(.*)': '<rootDir>/src/materialUI/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^constants/(.*)': '<rootDir>/src/constants/$1',
    '^providers/(.*)': '<rootDir>/src/providers/$1',
    "\\.(css|scss)$": "identity-obj-proxy",
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/fileMock.ts',
  },
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  setupFiles: [
    '<rootDir>/jest/globals.ts',
    '<rootDir>/src/store/testHelpers/axiosTest/index.ts',
    '<rootDir>/src/store/testHelpers/generatorTest/index.ts',
    '<rootDir>/src/store/testHelpers/getByIdTest/index.ts',
    '<rootDir>/src/store/testHelpers/constructor/index.ts',
    '<rootDir>/src/store/testHelpers/getterIsLoading/index.ts',
    '<rootDir>/src/store/testHelpers/generatorApi/index.ts',
    '<rootDir>/src/components/testHelpers/callEventFromComponent/index.ts',
    '<rootDir>/src/components/testHelpers/snapshot/index.ts',
    'jest-localstorage-mock',
    'jest-date-mock',
  ],
  testMatch: [ '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test|snap).[jt]s?(x)',],
  reporters: [ 'default', 'jest-junit' ],
  modulePathIgnorePatterns: ['__stories__'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!src/**/*.d.ts', '!**/__stories__/**', '!**/__fixtures__/**'],
  coverageReporters: ['text', ['lcov', {'src': '../../'}], 'cobertura'],
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 95,
      functions: 98,
      lines: 99,
    }
  }
};
