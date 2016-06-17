var React = require('react');
var Project = require('../components/Project');

var ProjectContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    
  },
  handleProjectSelect: function () {
    this.context.router.push({
      path: '/',
      query: this.props.project.name
    });

    // console.log(this.context)
  },
  render: function () {
    return (
      <Project onProjectSelect={this.handleProjectSelect} project={this.props.project} />
    )
  }
});

module.exports = ProjectContainer;