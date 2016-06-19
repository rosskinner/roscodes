var React = require('react');
var Navigation = require('./Navigation');
var Heading = require('./Heading');
var Projects = require('./Projects');

var Home = React.createClass({
  render: function () {
    return (
      <div className="mdl-grid">

        <div className="mdl-grid mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet" id="left">
          <Navigation />
          <Heading title="i like being weird. weird's all i've got. that and my sweet style. sydney."/>
          
          <Projects projects={this.props.projects} />
         
        </div>

        
          {this.props.children}
        

        
      </div>

    )
  }
});

module.exports = Home;