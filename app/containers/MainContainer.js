var React = require('react');
var Main = require('../components/Main');
var Loading = require('../components/Loading');
var googlesheetHelpers = require('../utils/googlesheetHelpers');


var MainContainer = React.createClass({
  getInitialState: function () {
    return {
        isLoading: true,
        projects: []
    };
  },
  componentDidMount: function () {
    googlesheetHelpers.init()
    .then(function (projects) {
      this.setState({
        isLoading: false,
        projects: projects
      });
    }.bind(this));
  },
  render: function () {
    return this.state.isLoading === true
    ? <Loading />
    : <Main isLoading={this.state.isLoading} projects={this.state.projects}>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </Main>

  }
});

module.exports = MainContainer;
