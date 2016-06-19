var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var Project = function (props) {
  return (
    
    <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone" >
      <Link to={props.project.name + '?' + props.id}>
        <h2>{props.project.exp}</h2>
        <p>{props.project.name}
        <br />{props.project.description}
        <br />{props.project.tools}</p>
      </Link>
    </div>
    
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exp: PropTypes.string.isREquired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired
  })
}
module.exports = Project;