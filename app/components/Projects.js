var React = require('react');
var Project = require('./Project');
var PropTypes = React.PropTypes;

var Projects = function (props) {
  return (
    <div className="grid-content mdl-grid"> 
      {props.projects.map(function(result, i) {
        return <Project key={i} id={i} project={result} />
      })}
        
    </div>
  )
};

Projects.propTypes = {
  projects: PropTypes.array
}

module.exports = Projects;