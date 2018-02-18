
(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js').parseString;


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
          /*added 18/2 Task2 design fetch books*/
          fs.readFile("books.xml", function(err,data){
            if(err){
              console.log(err);
            }
            else{
              console.log(data.toString());
            }
          });

        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
