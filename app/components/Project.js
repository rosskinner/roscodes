var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var Project = function (props) {
  return (
    <Link to={props.project.name}>
      <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone" >
        <h2>{props.project.exp}</h2>
        <p>{props.project.name}
        <br />{props.project.description}
        <br />{props.project.tools}</p>
      </div>
    </Link>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  onProjectSelect: PropTypes.func.isRequired
}
module.exports = Project;