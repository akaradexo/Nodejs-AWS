const request = require('supertest');
const { response } = require('./app');
const app = require('./app');


describe('Todos API',()=>{
    it('GET /todos --> array todos',()=>{
        return request(app)
        .get('/todos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) =>{
            expect(response.body).toEqual(
                expect.arrayContaining([
                expect.objectContaining({
                    task: expect.any(String),
                    isCompleted: expect.any(Boolean)
                }),
            ])
            )
        });

    });
    it('GET /todos/id --> specific todo by ID',()=>{
        return request(app)
        .get('/todos/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) =>{
            expect(response.body).toEqual(
                expect.objectContaining({
                    id:expect.any(Number),
                    task: expect.any(String),
                    isCompleted: expect.any(Boolean)
                }),
            )
        });

    });

    it('GET /todos/id --> 404 ',()=>{
        return request(app)
        .get('/todos/9999')
        .expect(404);
    });

    it('POST /todos --> created todo',()=>{
        return request(app)
        .post('/todos')
        .send({
            task: 'do dishes'
        })
        .expect('Content-Type',/json/)
        .expect(201)
        .then((response) =>{
            expect(response.body).toEqual(
                expect.objectContaining({
                    task: 'do dishes',
                    isCompleted: false
                }),
            );
        });
    });

    it('POST /todos --> validate request body',()=>{
        return request(app)
        .post('/todos')
        .send({
            task:123
        })
        .expect(422);
    });
});

