var React = require('react');
require('material-design-lite/material.min.css');
require('../main.css');



var Main = React.createClass({
  render: function () {
    // console.log(mat);
    return (
      <div id="main">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;