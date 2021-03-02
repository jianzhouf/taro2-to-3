'use strict';

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = [
  'class-property'
];

tests.forEach(test => {
  defineTest(
    __dirname,
    'page-config',
    {
      quote: 'single'
    },
    `page-config/${test}`
  );
});
