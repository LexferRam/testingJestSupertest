const request = require('supertest');
const app = require('../src/app');

//testing get all users endpoints

describe('GET /users',() => {

    it('respond with json containing a list of users', done => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});


describe('GET /users',() => {

    it('respond with json containing a single user', done => {
        request(app)
            .get('/users/U0001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('respond with json "User U0001 found" when the user exist', done => {
        request(app)
            .get('/users/U0001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"User U0001 found"')
            .end((error) => {
                    if(error) return done(error);
                    done();
            });
    });

    it('respond with json user "user not found" when the user not exist', done => {
        request(app)
            .get('/users/nonexistinguser')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"User not found"')
            .end((error) => {
                    if(error) return done(error);
                    done();
            });
    });
});

describe("POST /users", () => {

    it('respond with 201 created', done => {

        const data = {
            username : 'Lexfer',
            password: 'Ramirez'
        }

        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((error) => {
                if(error) return done(error);
                done();
            });
    })


    it('respond with 400 created', done => {

        const data = {}

        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"User not created"')
            .end((error) => {
                if(error) return done(error);
                done();
            });
    })
})
