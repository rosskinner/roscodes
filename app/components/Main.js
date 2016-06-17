var React = require('react');
var Home = require('./Home');
require('material-design-lite/material.min.css');
require('../main.css');



var Main = React.createClass({
  render: function () {
    // console.log(mat);
    return (
      <div id="main">
        <Home>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </Home>
      </div>
    )
  }
});

module.exports = Main;