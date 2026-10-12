const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

describe('Node.js Application Tests', function () {

    it('should return the home page successfully', async function () {
        const res = await request(app).get('/');

        expect(res.status).to.equal(200);
        expect(res.text).to.equal(
            'Hello from Node.js CI/CD Project!'
        );
    });

    it('should return application health status', async function () {
        const res = await request(app).get('/health');

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('OK');
        expect(res.body.message).to.equal(
            'Application is running'
        );
    });

});
