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
    
    var projects = googlesheetHelpers.init();
    
    // .then(function (projects) {
    //   console.log(projects);
    // })
      // googlesheetHelpers.init().then(function (projects) {

      // console.log(projects);
        this.setState({
          isLoading: false,
          projects: projects
        });
      // })
    

        
  },
render: function () {
  console.log(this.state.projects);
  return (
    <Projects isLoading={this.state.isLoading} projects={this.state.projects}/>
  )
}
});

module.exports = ProjectsContainer;