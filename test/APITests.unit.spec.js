"use strict";
//Task 4 API tests
var request = require('supertest');

var app = require("../app");

describe("Testing GetBooksResource respond, first test", function () {
  
    describe("GET /api/books", function () {

        it("Should resturn 200 status code", function (done) {

            request(app)
                .get('/api/books')
                .expect(200)
                .end((err, res) =>{
                  console.log("err is", err);
                  if(err) throw new Error(err);
                  done();
                });

        });

    });
});
describe("Testing GetBooksResource respond, second test", function () {

    describe("GET /api/books", function () {

        it("Should resturn JSON format", function (done) {

            request(app)
                .get('/api/books')
                .expect('Content-Type', /json/)
                .end((err, res) =>{
                  console.log("err is", err);
                  if(err) throw new Error(err);
                  done();
                });

        });

    });
});
