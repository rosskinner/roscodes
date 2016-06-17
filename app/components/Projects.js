var React = require('react');
var Project = require('./Project');
var ProjectContainer = require('../containers/ProjectContainer');
var PropTypes = React.PropTypes;

var Projects = function (props) {
  return props.isLoading === true
  ? <div className="grid-content mdl-grid">Loading</div>
  : <div className="grid-content mdl-grid"> 
      {props.projects.map(function(result, i) {
        return <ProjectContainer key={i} project={result} />
      })}
        
    </div>
};

Projects.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  projects: PropTypes.array
}

module.exports = Projects;