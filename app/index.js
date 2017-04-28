var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var googlesheetHelpers = require('./utils/googlesheetHelpers');

ReactDOM.render(
  routes,
  document.getElementById('app')
);