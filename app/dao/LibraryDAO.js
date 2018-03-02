
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
          /*added 18/2 Task2 design fetch books, solved with inspiration from: https://github.com/Leonidas-from-XIV/node-xml2js*/
          /* Försök med callbacks*/
          fs.readFile("books.xml",(err,data) => {
                if(err){
                console.log(err);
                }
                else{
                  let arr = [];
                //  let books = [];
                  //convert the data to javascript
                  parseString(data,(err, file) => {

                        console.log("This should print");

                        console.log("så här ska den se ut*********");
                        console.log(file);
                        console.log("längden av file är: " + file.length);


                        //add the objects from the file to an array
                        file.catalog.book.forEach((element) =>{
                            arr.push(element);

                        });
                        console.log("såhär ska den se ut!!!!!!!!!!!!!!!11");
                        console.log(arr);
                        console.log("längden av arr är: " + arr.length);

                        for(let i = 0; i< arr.length; i++){
                          books.push(new Book(String(arr[i].$.id), arr[i].author, arr[i].title, arr[i].genre, arr[i].price, arr[i].publish_date, arr[i].description))
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

          let counter = 1;

          let modifiedBooks = [];

          for(let i = 0; i< books.length; i++){

              if(books[i].id != data){
                  modifiedBooks.push(books[i]);
              }
          }
          for(let i = 0; i<modifiedBooks.length; i++){

              modifiedBooks[i].id = counter;
              counter++;
          }

          let tempArr = [];
        /*  console.log("modifiedBooks");
          console.log(modifiedBooks);*/

          for(let i = 0; i < modifiedBooks.length; i++){

              tempArr[i] = ({$:{id:String(modifiedBooks[i].id)}, author:modifiedBooks[i].author, title:modifiedBooks[i].title, genre:modifiedBooks[i].genre, price:modifiedBooks[i].price, publish_date:modifiedBooks[i].publish_date, description:modifiedBooks[i].description});

          }
          //let book = {tempArr};
          let catalog = {book:tempArr};
          console.log("catalog");
          console.log(catalog);
          let shell = {catalog};
          console.log("shell");
          console.log(shell);

          /*console.log("ny array med endast $!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          console.log(tempArr);*/

          /*funkar
          //från js obj till xml
          var obj = {name: "Super", Surname: "Man", age: 23};
          console.log("from js to xml");

          let xmlObj = builder.buildObject(obj);
          console.log(xmlObj);

          //från xml till js
          console.log("from xml to js");
          parseString(xmlObj, (err,res) =>{
            if(err){
                console.log(err);
            }
            else {
                console.log(res);
            }
          }); //slut parseString */

        }
    };

    module.exports = LibraryDAO;
}());
