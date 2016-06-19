var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var MainContainer = require('../containers/MainContainer');
var HomeImage = require('../components/HomeImage');
var ImageContainer = require('../containers/ImageContainer');

var style = '#000';
var image = '';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute style={style} image={image} component={HomeImage} />
      <Route path=':project' component={ImageContainer} />
    </Route>
  </Router>
)

module.exports = routes;