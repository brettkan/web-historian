var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile(paths.list, function(err, data) {
    if (err) {
      console.log("Error with readListOfUrls");
    } else {
      return callback(data.toString().split("\n"));
    }
  })
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(urls) {
    return callback(_.contains(urls, url));
  });
};

exports.addUrlToList = function(url){
  exports.isUrlInList(url, function(isTrue) {
    if (!isTrue) {
      fs.appendFile(paths.list, url + '\n');
    }
  })
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
