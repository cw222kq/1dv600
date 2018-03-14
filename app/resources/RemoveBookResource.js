(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    //executing when the delete button is pushed
    module.exports = function (id, callback) {

      /*Theme 2 Task 3 delete books*/
      callback(LibraryDAO.writeXMLFile(id,"books.xml"));

    };

}());
