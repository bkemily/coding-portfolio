const request = require('supertest');
const app = require('./app');

describe('Server Jest Initialization', () => {
    it('Should ensure Jest is Initialized and Functional on the Server', () => {
        expect(true).toBeTruthy();
    });
});
