"use strict";
var less = require("less");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    return less.render(content, {
        filename: scope.getFilename(),
    }).then(function (output) {
        return output.css;
    });
});
