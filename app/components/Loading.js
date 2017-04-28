var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({
  getInitialState: function () {
    this.originalText = 'Loading';
    return {
      text: this.originalText
    }
  },
  componentDidMount: function () {
    var stopper = this.originalText + '...';
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), 300)
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
});

module.exports = Loading;
