var React = require('react');
var Home = require('./Home');

require('material-design-lite/material.min.css');
require('../main.css');



var Main = function (props) {
  return (
    <div id="main">
      
        <Home projects={props.projects} >
          {props.children}
        </Home>
        
    </div>
  )
};




module.exports = Main;