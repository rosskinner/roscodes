var Promise = require('bluebird');
var API_KEY = 'AIzaSyCsfL4DLILxSHLFTyVA0udGZndTxF8IFWY';
var IMAGE_FOLDER = '0BwFJ9kPqyXeSNGhTUHdkZjFQZFk';
var IMAGE_FOLDER = 'https://googledrive.com/host/' + IMAGE_FOLDER + '/';
console.log(IMAGE_FOLDER);
var res;

var projects = [];
var project = {};


function init () {
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
      range: 'A:F'
    }).then(function(response) {
      var data = response.result.values;
      // console.log(data);
      res(transformData(data));
      localStorage.setItem('projects', JSON.stringify(transformData(data)));
      $.cookie('projects', projects, {expires: 0.02});
    }, function(response) {
      console.log('Error: ' + response.result.error.message);
    });;
  
}

function transformData (data) {
  projects = [];
  for (var i = 1; i < data.length; i++) {
    project = {};
    project.exp = data[i][0] ; 
    project.name = data[i][1] ;
    project.description = data[i][2] ;
    project.tools = data[i][3] ;
    project.image = data[i][4] ;
    project.color = data[i][5] ;
    projects.push(project);
  }
  return projects;
}



var googlesheetHelpers = {
  init: function () {
    return new Promise(function (resolve, reject) {
      res = resolve;
      if (!$.cookie('projects') || !localStorage.getItem('projects')) {
          gapi.load('client', init);  
      } else {
          projects = JSON.parse(localStorage.getItem('projects'));
          res(projects);
      }  

    });
  },
  getProject: function (id) {
    return new Promise(function (resolve, reject) {
      id = parseInt(id.split('?')[1])
      resolve(projects[id]);
    });
  },
  getImage: function (img) {
    return IMAGE_FOLDER + img;
  }
}

module.exports = googlesheetHelpers;