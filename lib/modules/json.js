/*!
 * to.js - json parser
 *  
 * Copyright(c) 2012 Truepattern
 * MIT Licensed
 */

var fs = require('fs');

// json parser wrapper
// - load(filename)
// - load(data)
// - stringify(doc)

// please note that if the extension is NOT json
// it wouldn't load
exports.load = function(doc) {
  try {
    return this.loadContent(doc);
  } catch (e) {
    console.log(e.stack || e.toString());
  }
};

exports.loadContent = function(json) {
  return JSON.parse(json);
};

exports.stringify = function(doc) {
  return JSON.stringify(doc,null,2);
};
