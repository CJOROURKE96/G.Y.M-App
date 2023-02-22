const request = require('supertest');
const { app } = require('../app');
const mongoose = require('mongoose');
const Exercise = require('../schemas/ExerciseSchema');
const { User } = require('../schemas/UserSchema');
const Categories = require('../schemas/CategoriesSchema');
const { exercises } = require('../data/exercises-data');
const { users } = require('../data/user-data');
const { categories } = require('../data/categories-data');
const database = require('../connection');

// require('dotenv').config({
//   path: `${__dirname}/.env`,
// });

// const url = process.env.DATABASE_URL;

// console.log(url);

// mongoose.connect(url);
// const database = mongoose.connection;

beforeEach(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  await Exercise.deleteMany();
  await Exercise.insertMany(exercises);
  await Categories.deleteMany();
  await Categories.insertMany(categories);
});

afterAll(async () => {
  await database.close();
});

describe('GET /api/users', () => {
  test('should return all users', () => {
    return request(app)
      .get('/api/users')
      .expect(200)
      .then(({ body: { users } }) => {
        users.forEach((user) => {
          expect(user).toHaveProperty('username', expect.any(String));
          expect(user).toHaveProperty('password', expect.any(String));
          expect(user).toHaveProperty('_id', expect.any(Number));
          expect(user).toHaveProperty('avatar_url', expect.any(String));
          expect(user).toHaveProperty('__v', expect.any(Number));
        });
        expect(Array.isArray(users)).toBe(true);
      });
  });
});
describe('GET /api/exercises', () => {
  test('should return exercises', () => {
    return request(app)
      .get('/api/exercises')
      .expect(200)
      .then(({ body: { exercises } }) => {
        exercises.forEach((exercise) => {
          expect(exercise).toHaveProperty('_id', expect.any(String));
          expect(exercise).toHaveProperty('name', expect.any(String));
          expect(exercise).toHaveProperty('type', expect.any(String));
          expect(exercise).toHaveProperty('muscle', expect.any(String));
          expect(exercise).toHaveProperty('equipment', expect.any(String));
          expect(exercise).toHaveProperty('difficulty', expect.any(String));
          expect(exercise).toHaveProperty('instructions', expect.any(String));
          expect(exercise).toHaveProperty('__v', expect.any(Number));
        });
        expect(Array.isArray(exercises)).toBe(true);
      });
  });
});
describe('GET /api/categories', () => {
  test('should return categories', () => {
    return request(app)
      .get('/api/categories')
      .expect(200)
      .then(({ body: { categories } }) => {
        categories.forEach((category) => {
          expect(category).toHaveProperty('category', expect.any(String));
          expect(category).toHaveProperty('_id', expect.any(String));
        });
      });
  });
});
describe('GET /api/users/:_id', () => {
  test('should return user object', () => {
    return request(app)
      .get('/api/users/1')
      .expect(200)
      .then(({ body: { user } }) => {
        console.log(user);
        expect(user).toHaveProperty('username', expect.any(String));
        expect(user).toHaveProperty('password', expect.any(String));
        expect(user).toHaveProperty('avatar_url', expect.any(String));
      });
  });
  test('should return correct user', () => {
    return request(app)
      .get('/api/users/1')
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toEqual({
          username: 'user1',
          password: 'PassWord!',
          avatar_url: '...',
        });
      });
  });
  test('400: bad request, invalid id type', () => {
    return request(app)
      .get('/api/users/notAnId')
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe('Bad request: invalid _id type');
      });
  });
  test('404: nonexistent id', () => {
    return request(app)
      .get('/api/users/2000')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe('Not Found');
      });
  });
});
