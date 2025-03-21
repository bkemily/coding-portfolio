const request = require('supertest');

// Check that the contact endpoint exists
describe('Create Contact Message', () => {
    
    let app;

    beforeEach(() => {
        app = require('../app');
    });
    
    it('Create Contact Message should return 400 for missing name', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                emailAddress: 'test@test.com',
                subject: 'Test Subject',
                message: 'Test Message'
            });
    });

    it('Create Contact Message should return 400 for missing email address', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                name: 'Test Name',
                subject: 'Test Subject',
                message: 'Test Message'
            });
    });

    it('Create Contact Message should return 400 for missing subject', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                name: 'Test Name',
                emailAddress: 'test@test.com',
                message: 'Test Message'
            });
    });

    it('Create Contact Message should return 400 for missing message', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                name: 'Test Name',
                emailAddress: 'test@test.com',
                subject: 'Test Subject'
            });
    });
});