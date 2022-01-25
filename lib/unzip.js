exports.openZip = openZip;

var fs = require("fs");

var promises = require("./promises");
var zipfile = require("./zipfile");

exports.openZip = openZip;

function openZip(options) {
    console.log('ZIP',options)
    return promises.resolve(zipfile.openArrayBuffer(options));
}
