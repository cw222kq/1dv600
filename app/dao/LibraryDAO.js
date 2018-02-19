
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
        readXMLFile: function(callback) { //har slut vinge
          /*added 18/2 Task2 design fetch books, solved with inspiration from: https://github.com/Leonidas-from-XIV/node-xml2js*/
              fs.readFile("books.xml", function(err,data){ //har slutvinge
                if(err){ //har slut vinge
                  console.log(err);
                } //slut på if
                else{ //har slutvinge
                  /* convert the data to javascript objects and save in result*/
                  parseString(data, function(err, result){
                      if(err){ //har slutvinge
                        console.log(err);
                      } //slut på if
                      else if(result){
                        /*printing out javascript objects*/
                        console.log("printing out javascript objects*************");
                        console.log(result.catalog.book);
                        console.log("The end of printing js objects!!!!!!!!!!!111");
                        /*converting the javascript objects to JSON and printing it in the console*/
                        console.log("printing out data in JSON***************")
                        //console.log(JSON.stringify(result.catalog.book));
                        console.log("the end of printing data in JSON!!!!!!!!!!!!!!!!");
                        var promise = new Promise(function(resolve,reject){
                          if(result){ //har slutvinge
                            console.log("RESULT");
                            resolve(JSON.stringify(result.catalog.book));
                            //console.log(JSON.stringify(result.catalog.book));
                            return JSON.stringify(result.catolog.book);
                          } //slut på if
                          else { //har slutvinge
                            console.log("REJECT");
                            reject("none");
                          } //slut på else

                        });
                      }//slut på else if tillagt senare

                    });//slut på else tillagt sernare

                  } //slut på parseString

              }); //slut på fs.readfile

      }, //end of readXMLFile

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
