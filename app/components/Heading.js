var React = require('react');
var PropTypes = React.PropTypes;

var Heading = function (props) {
  return (
      <h1 className="heading">{props.title}</h1>
  )
}

Heading.propTypes = {
  title: PropTypes.string.isRequired
}
module.exports = Heading; 