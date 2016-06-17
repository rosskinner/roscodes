var React = require('react');

var ImageContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    
  },
  render: function () {
    console.log(this.props)
    return (
      <div className="mdl-grid mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet" id="right">
        <p></p>
      </div>
    )
  }
}) 



module.exports = ImageContainer;