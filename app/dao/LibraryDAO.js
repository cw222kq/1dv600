
(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    var parseString = require('xml2js').parseString;
    var Book = require('../dao/Book');

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
          /*added 18/2 Task2 design fetch books, solved with inspiration from: https://github.com/Leonidas-from-XIV/node-xml2js*/
          /* Försök med callbacks*/
          fs.readFile("books.xml",(err,data) => {
                if(err){
                  console.log(err);
                }
                else{
                  let arr = [];
                  let books = [];
                  //convert the data to javascript
                  parseString(data,(err, file) => {

                        console.log("This should print");
                        //changing the file to the correct format for the browser
                        file.catalog.book.forEach((element) =>{
                            arr.push(element);
                        });

                        for(let i = 0; i< arr.length; i++){
                          books.push(new Book(arr[i].$.id, arr[i].author, arr[i].title, arr[i].genre, arr[i].price, arr[i].publish_date, arr[i].description))
                        }
                      
                        return callback(JSON.stringify(books));
                  });

                }

              });


      }, //end of readXMLFile

      /* When I did this I simply loaded the whole xml file as in list books,
      then removed the book from the array,
      constructed a text string representing the xml code for the whole array of books.
      and saved it using fs... i.e. no fancy xml manipulation... */

        // Write the entire file from the file system.
        writeXMLFile: function(data) {



          let arr = [];

      /*    fs.readFile("books.xml",(err,file) => {
                if(err){
                  console.log(err);
                }
                else{
                  file.forEach((book) => {
                      arr.push(catalog.book);
                  });

                  console.log(arr);
                  //return file;
                }


          }); */

          /*  fs.writeFile("books.xml", data, function (err) {
              if (err) throw err;
              console.log('Saved!');
            });*/

        }
    };

    module.exports = LibraryDAO;
}());
