var Promise = require('bluebird');
// var axios = require('axios');
var API_KEY = 'AIzaSyCsfL4DLILxSHLFTyVA0udGZndTxF8IFWY';
var IMAGE_FOLDER = '0BwFJ9kPqyXeSNGhTUHdkZjFQZFk';
var IMAGE_FOLDER = 'https://googledrive.com/host/' + IMAGE_FOLDER + '/';
console.log(IMAGE_FOLDER);


var projects = [];
var project = {};


function init () {
  promise().then(function (res) {
    console.log(res);
    return res;
  });

  
}

function promise() {
  return new Promise(function (resolve, reject) {
    gapi.client.setApiKey(API_KEY);
    loadSheetsApi(resolve);
  });
}

function loadSheetsApi(resolve) {
  var discoveryUrl =
     'https://sheets.googleapis.com/$discovery/rest?version=v4';
  gapi.client.load(discoveryUrl).then(
    function () {
      listEntries(resolve)
    });
}


function listEntries(resolve) {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '14dCx9IbNuI97K9znJrH4G_7JcM4GDkiS42JGRkCjy-o',
      range: 'A:E'
    }).then(function(response) {
      var data = response.result.values;
      // console.log(data);
      return resolve(transformData(data));
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
    
      
      return gapi.load('client', init);
    
      
      // gapi.client.setApiKey(API_KEY);
      // loadSheetsApi();
  },
  getProjects: function () {
    return loadSheetsApi();
    // return projects;
  }
}

module.exports = googlesheetHelpers;