
(function () {
    "use strict";
    let books = [];

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    var parseString = require('xml2js').parseString;
    var Book = require('../dao/Book');
    var builder = new xml2js.Builder();

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {

          //empties the books array
          books = [];
          /*added 18/2 Task2 design fetch books, solved with inspiration from: https://github.com/Leonidas-from-XIV/node-xml2js*/
          fs.readFile("books.xml",(err,data) => {
                if(err){
                console.log(err);
                }
                else{
                  let arr = [];

                  //convert the data to javascript
                  parseString(data,(err, file) => {

                      //add the objects from the file to an array
                      file.catalog.book.forEach((element) =>{
                          arr.push(element);
                      });

                      for(let i = 0; i< arr.length; i++){
                          books.push(new Book(String(arr[i].$.id), arr[i].author, arr[i].title, arr[i].genre, arr[i].price, arr[i].publish_date, arr[i].description))
                      }

                      return callback(JSON.stringify(books));
                  });

                }

          });

        }, //end of readXMLFile
      // Write the entire file from the file system.
        writeXMLFile: function(data) {
          //counter used to update the id:s of the books
          let counter = 1;
          let modifiedBooks = [];
          //pushing all the books we want to save into a new array
          for(let i = 0; i< books.length; i++){

              if(books[i].id != data){
                  modifiedBooks.push(books[i]);
              }
          }
          //updating the id numbers of the books
          for(let i = 0; i<modifiedBooks.length; i++){

              modifiedBooks[i].id = counter;
              counter++;
          }
          let tempArr = [];

          for(let i = 0; i < modifiedBooks.length; i++){

              tempArr[i] = ({$:{id:String(modifiedBooks[i].id)}, author:modifiedBooks[i].author, title:modifiedBooks[i].title, genre:modifiedBooks[i].genre, price:modifiedBooks[i].price, publish_date:modifiedBooks[i].publish_date, description:modifiedBooks[i].description});

          }
          //changing the book objects to in the same foramat as the book objects in books.xml. To be able to convert the objects to xml later on
          let catalog = {book:tempArr};
          let shell = {catalog};

          //converting the book objects to xml
          let xmlObj = builder.buildObject(shell);

          //saving the book objects (in xml) to the book.xml file. i.e. replacing the old data with the new
          fs.writeFile("books.xml", xmlObj,(err, res) => {
            if (err) {
              console.log(err);
            }
            console.log('Saved!');

          });

        }
    };

    module.exports = LibraryDAO;
}());
