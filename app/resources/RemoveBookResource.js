(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    //denna koden exikveras när man trycker på delete-knappen
    module.exports = function (id, callback) {

      /*Theme 2 Task 3 delete books*/
      LibraryDAO.writeXMLFile(id);



    };

}());
