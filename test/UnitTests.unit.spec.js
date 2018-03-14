"use strict";

var expect    = require("chai").expect;
var LibraryDAO = require('../app/dao/LibraryDAO');

//Task 3 Unit tests, testing the length of the array before deleting a book **one test case**
describe("Delete book pre", function () {

    describe("Testing the length of the list of books before deleting a book", function () {

        it("The result that should be returned is 10. i.e. there are 10 books in the list at the beginning", function (done) {

            LibraryDAO.readXMLFile((resolve,reject) =>{

            let result = [];
            result = JSON.parse(resolve);
            done();
            expect(result).to.have.length(10);


            },"booksTestfileDeleteBooks.xml");

        });

    });

}); //delting book no 10 **two test case**
describe("Tests delete book", function () {
    describe("Deleting a book", function () {
        it("The book is removed", function (done) {

          LibraryDAO.readXMLFile((resolve,reject) =>{

            let result = [];
            result = JSON.parse(resolve);
            done();
            LibraryDAO.writeXMLFile('10',"booksTestfileDeleteBooks.xml");

          },"booksTestfileDeleteBooks.xml");
          //testing the length of the array after deleting the book
            describe("Testing the length of the list of books after deleting a book", function () {
              it("The result that should be returned is 9.", function (done) {

                LibraryDAO.readXMLFile((res,reject) =>{

                  let result = [];
                  result = JSON.parse(res);
                  done();
                  expect(result).to.have.length(9);

                },"booksTestfileDeleteBooks.xml");

              });

          });

        });
      });

});
//Task 3 Unit tests, testing the add book method that is not complete yet. The test should fail
describe("Tests add book", function () {
    describe("Adding a book", function () {
      it("The book is added to the list of books. Testing the length of the array. Should return 11", function (done) {

        LibraryDAO.readXMLFile((resolve,reject) =>{

          let result = [];
          result = JSON.parse(resolve);
          done();
          let bookObj = {author:"Stephen King", title:"IT", genre:"horror", price:90, publish_date:"1986-01-01", description:"It is a 1986 horror novel by American author Stephen King..."};
          LibraryDAO.writeXMLFile(bookObj,"booksTestfileAddBooks.xml");

        },"booksTestfileAddBooks.xml");
        //testing the length of the array after adding the book
          describe("Testing the length of the list of books after adding a book", function () {
            it("The result that should be returned is 11.", function (done) {

              LibraryDAO.readXMLFile((res,reject) =>{

                let result = [];
                result = JSON.parse(res);
                done();
                expect(result).to.have.length(11);

              },"booksTestfileAddBooks.xml");

            });


        });

    });

  });

});
