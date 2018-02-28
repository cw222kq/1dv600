
(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    var parseString = require('xml2js').parseString;

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
                  //convert the data to javascript objects and save in result
                  parseString(data,(err, file) => {

                        console.log("This should print");
                        //console.log(file);
                        return callback(JSON.stringify(file.catalog.book));
                  });

                }

              });


      }, //end of readXMLFile

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
            
        }
    };

    module.exports = LibraryDAO;
}());
