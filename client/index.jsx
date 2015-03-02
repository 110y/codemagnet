var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;

var Container = require('./components/container/container.jsx');
var Index = require('./views/index/index.jsx');
var Post = require('./views/post/post.jsx');

var routes = (
  <Route name="codemagnet" path="/" handler={Container}>
    <DefaultRoute handler={Index}/>
    <Route name="post" handler={Post}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
