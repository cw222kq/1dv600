
(function getBooks() {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');

    /*Creating an empty array, added 30/1 subtask a*/
    var listOfBooks = [];

    /*Adding some books, added 30/1 subtask a*/
    /*listOfBooks.push(new Book(1,"IT","Stephen King", "horror",860101, 90,"It is a 1986 horror novel by American author Stephen King..."));
    listOfBooks.push(new Book(2,"Cujo","Stephen King", "horror",810202, 75,"It is a 1981 psychological horror novel about a rabid dog..."));
    listOfBooks.push(new Book(3,"Harry Potter and the Philosopher's Stone","J.K Rowling", "fantasy", 970303, 80," It is the first novel in the Harry Potter series.."));
    */


    /*19/"*/
    /*var result = new LibraryDAO.readXMLFile();
    result.forEach(obj =>{
        listOfBooks.push(catalog.book);
    listOfBooks.push(new LibraryDAO.readXMLFile();
  });*/
  //listOfBooks.push(new LibraryDAO.readXMLFile());
    /*19/" slut*/


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)

          /*19/"*/

          console.log("console loggar read xmlfile");
          (new LibraryDAO.readXMLFile(),function(err,dataFromFile){
            console.log("tillbax i getbooksresource");
            if(err){
              console.log("ierr");
              console.log(err);
            }
            else{
              console.log("i elsen i getbooksresource");
              console.log(dataFromFile);
              callback(dataFromFile);
            }
          });
          /*19/" slut*/


          /*added 30/1 subtask a*/
          //console.log(listOfBooks);

          /*added 31/1 subtask b*/
          //console.log(JSON.stringify(listOfBooks));

          /*added 31/1 subtask c*/
          //callback(JSON.stringify(listOfBooks));








          /*added 18/2 Task2 design fetch books*/
          //callback(console.log(new LibraryDAO.readXMLFile()));

          /*console.log(new LibraryDAO.readXMLFile());*/
          //callback(new LibraryDAO.readXMLFile());
          //callback(new LibraryDAO.readXMLFile());

          //callback(console.log(new LibraryDAO.readXMLFile()));
         /*callback(new LibraryDAO.readXMLFile(),function(err,result){
            if(err){

              console.log(err);
            }
            else{

              console.log(result);
              callback(result);
            }
          });*/

          /*
          new LibraryDAO.readXMLFile(),function(result,err){
            if(result){

              console.log(result);
            }
            else{

              console.log(err);
            }

          };*/
    };

}());
