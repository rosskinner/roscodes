var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var ImageContainer = require('../components/ImageContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      // <IndexRoute component={Home} />
      <Route path=':project' component={ImageContainer} />
    </Route>
  </Router>
)

module.exports = routes;