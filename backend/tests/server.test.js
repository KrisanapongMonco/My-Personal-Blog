const request = require('supertest');
const app = require('../server');
let server;

beforeAll((done) => {
  server = app.listen(3000, done);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World!');
  });
});

describe('GET /posts', () => {
  it('should return a list of posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toHaveProperty('title', 'First Post');
  });
});

describe('POST /posts', () => {
  it('should create a new post', async () => {
    const newPost = { title: 'New Post', content: 'This is a new post' };
    const res = await request(app).post('/posts').send(newPost);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title', 'New Post');
  });
});