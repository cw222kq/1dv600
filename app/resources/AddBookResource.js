(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (data, callback) {

      console.log("inne i addbookresourse. Tryckt på knappen new book and sen save. consoleloggar data ");
      callback(LibraryDAO.writeXMLFile(data,"books.xml"));


    };

}());
