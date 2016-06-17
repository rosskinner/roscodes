var React = require('react');
var Project = require('./Project');
var PropTypes = React.PropTypes;

// var Projects = React.createClass({

//   render: function () {
//     return (
//       <div className="grid-content mdl-grid"> 
//       {props.map(function(result) {
//         return <Project projectDetails={result} />
//       })}
        
      
//       </div>
//     )
//   }
  
// });

var Projects = function (props) {
  return props.isLoading === true
  ? <div>not loaded</div>
  : <div className="grid-content mdl-grid"> 
      {props.projects.map(function(result) {
        return <Project project={result} />
      })}
        
    </div>
};

Projects.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  projects: PropTypes.array
}

module.exports = Projects;