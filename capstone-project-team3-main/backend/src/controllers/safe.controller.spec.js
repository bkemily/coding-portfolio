const request = require('supertest');

describe('Get Safe Posts', () => {

    let app;

    beforeEach(() => {
        app = require('../app');
    });

    it('should not return safe posts without last name', async () => {
        const res = await request(app)
            .get('/api/safe-posts')
            .send({
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St',
                homeAddress2: 'Apt 1',
                homeCity: 'Anytown',
                homeState: 'New York',
            });

        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not return safe posts without phone number or home address', async () => {
        const res = await request(app)
            .get('/api/safe-posts')
            .send({
                lastName: 'Doe'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not return safe posts without phone number and missing address', async () => {
        const res = await request(app)
            .get('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeCity: 'Anytown',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not return safe posts without phone number and missing city', async () => {
        const res = await request(app)
            .get('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not return safe posts without phone number and missing state', async () => {
        const res = await request(app)
            .get('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeCity: 'Anytown'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });
});

describe('Create Safe Post', () => {

    let app;

    beforeEach(() => {
        app = require('../app');
    });

    it('should not create safe post without last name', async () => {
        const res = await request(app)
            .post('/api/safe-posts')
            .send({
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St',
                homeAddress2: 'Apt 1',
                homeCity: 'Anytown',
                homeState: 'New York',
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not create safe post without phone number or home address', async () => {
        const res = await request(app)
            .post('/api/safe-posts')
            .send({
                lastName: 'Doe'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not create safe posts without phone number and missing address', async () => {
        const res = await request(app)
            .post('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeCity: 'Anytown',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not create safe posts without phone number and missing city', async () => {
        const res = await request(app)
            .post('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not create safe posts without phone number and missing state', async () => {
        const res = await request(app)
            .post('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeCity: 'Anytown'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });
});

describe('Update Safe Post', () => {

    let app;

    beforeEach(() => {
        app = require('../app');
    });

    it('should not update safe post without last name', async () => {
        const res = await request(app)
            .put('/api/safe-posts')
            .send({
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St',
                homeAddress2: 'Apt 1',
                homeCity: 'Anytown',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not update safe post without phone number or home address', async () => {
        const res = await request(app)
            .put('/api/safe-posts')
            .send({
                lastName: 'Doe'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not update safe posts without phone number and missing address', async () => {
        const res = await request(app)
            .put('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeCity: 'Anytown',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not update safe posts without phone number and missing city', async () => {
        const res = await request(app)
            .put('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeState: 'New York'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });

    it('should not update safe posts without phone number and missing state', async () => {
        const res = await request(app)
            .put('/api/safe-posts')
            .send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeCity: 'Anytown'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });
    
    it('should not delete safe post without ID', async () => {
        const res = await request(app)
            .delete('/api/safe-posts')
            .send({
                lastName: 'Doe'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });
});

describe('Delete Safe Post', () => {

    let app;

    beforeEach(() => {
        app = require('../app');
    });

    it('should not delete safe post without ID', async () => {
        const res = await request(app)
            .delete('/api/safe-posts')
            .send({
                lastName: 'Doe'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Missing required fields');
    });
});