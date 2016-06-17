var Promise = require('bluebird');
// var axios = require('axios');
var API_KEY = 'AIzaSyCsfL4DLILxSHLFTyVA0udGZndTxF8IFWY';
var IMAGE_FOLDER = '0BwFJ9kPqyXeSNGhTUHdkZjFQZFk';
var IMAGE_FOLDER = 'https://googledrive.com/host/' + IMAGE_FOLDER + '/';
console.log(IMAGE_FOLDER);
var res;

var projects = [];
var project = {};


function init () {
  // return new Promise(function (resolve, reject) {
    promise();
  // });
  
}

function promise() {
  
    gapi.client.setApiKey(API_KEY);
    loadSheetsApi();
  
}

function loadSheetsApi() {
  var discoveryUrl =
     'https://sheets.googleapis.com/$discovery/rest?version=v4';
    gapi.client.load(discoveryUrl).then( function () {
      listEntries()
    });
}


function listEntries() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '14dCx9IbNuI97K9znJrH4G_7JcM4GDkiS42JGRkCjy-o',
      range: 'A:E'
    }).then(function(response) {
      var data = response.result.values;
      // console.log(data);
      res(transformData(data));
    }, function(response) {
      console.log('Error: ' + response.result.error.message);
    });;
  
}

function transformData (data) {
  for (var i = 1; i < data.length; i++) {
    project = {};
    project.exp = data[i][0] ; 
    project.name = data[i][1] ;
    project.description = data[i][2] ;
    project.tools = data[i][3] ;
    project.image = data[i][4] ;
    projects.push(project);
  }
  // console.log(projects);
  return projects;
}

var googlesheetHelpers = {
  init: function () {
    return new Promise(function (resolve, reject) {
      gapi.load('client', init);
      res = resolve;
    });

  },
  getProjects: function () {
    return loadSheetsApi();
  }
}

module.exports = googlesheetHelpers;