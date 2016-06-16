var React = require('react');

var Project = function (props) {
  return (
    <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone">
      <h2>props.project.exp</h2>
      <p>props.project.name
      <br />props.project.description
      <br />props.project.tools</p>
    </div>
  )
}

module.exports = Project;