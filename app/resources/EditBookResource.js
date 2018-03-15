(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, data, callback) {

      LibraryDAO.editXMLFile(id,data,"books.xml");

    };

}());
