"use strict";

var expect    = require("chai").expect;
var LibraryDAO = require('../app/dao/LibraryDAO');
var AddSimpleFunction = require("../app/AddSimpleFunction");
//Task 3 Unit tests, testing the delete book function
describe("delete book pre", function () {

    describe("Testing the length of the list of books before deleting a book", function () {

        it("The result that should be returned is 10. i.e. there are 10 books in the list at the beginning", function (done) {

            LibraryDAO.readXMLFile((resolve,reject) =>{

            let result = [];
            result = JSON.parse(resolve);

            expect(result).to.have.length(10);
            done();

            });

        });

    });

});
describe("delete book", function () {
    describe("Deleting a book", function () {
        it("The book is removed", function (done) {

          LibraryDAO.readXMLFile((resolve,reject) =>{

            let result = [];
            result = JSON.parse(resolve);
            done();
            LibraryDAO.writeXMLFile(10);

          });
          describe("Testing the length of the list of books after deleting a book", function () {
            it("The result that should be returned is 9.", function (done) {
            
              LibraryDAO.readXMLFile((res,reject) =>{

                let result = [];
                result = JSON.parse(res);
                expect(result).to.have.length(9);
                done();

              });

          });

        });

    });
  });
});
//Task 3 Unit tests, testing the add book method that is not complete yet. The test should fail
