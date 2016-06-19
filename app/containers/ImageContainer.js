var React = require('react');
var googlesheetHelpers = require('../utils/googlesheetHelpers');
var HomeImage = require('../components/HomeImage');

var ImageContainer = React.createClass({
  getInitialState: function () {
    return {
      projectColor: '#000',
      isLoading: this.props.isLoading
    }
  },
  componentDidMount: function () {

      googlesheetHelpers.getProject(this.props.location.search)
      .then(function (project) {
        this.setState({
          projectColor: project.color,
          projectImage: googlesheetHelpers.getImage(project.image)
        });
      }.bind(this));
    

  },
  render: function () {
    var backgroundColor = { 
      background: this.state.projectColor 
    }
    return (
      <HomeImage style={backgroundColor} image={this.state.projectImage}/>

    )
    
  }
}) 



module.exports = ImageContainer;