var React = require('react');
var ImageContainer = require('./ImageContainer');
var Navigation = require('./Navigation');
var Heading = require('./Heading');
var ProjectsContainer = require('../containers/ProjectsContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div className="mdl-grid">

        <div className="mdl-grid mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet" id="left">
          <Navigation />
          <Heading title="i like being weird. weird's all i've got. that and my sweet style. sydney."/>
          
          <ProjectsContainer />
         
        </div>
        {this.props.children}
        
      </div>

    )
  }
});

module.exports = Home;