var React = require('react');
var Projects = require('../components/Projects');
var googlesheetHelpers = require('../utils/googlesheetHelpers');

var ProjectsContainer = React.createClass({
  getInitialState: function () {
      return {
          isLoading: true,
          projects: []
      };
  },
  componentDidMount: function () {
    googlesheetHelpers.init()
    .then(function (projects) {
      this.setState({
        isLoading: false,
        projects: projects
      });
    }.bind(this));
  },
render: function () {
  // console.log(this.props);
  return (
    <Projects isLoading={this.state.isLoading} projects={this.state.projects} />
  )
}
});

module.exports = ProjectsContainer;