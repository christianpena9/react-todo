var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

/* Custom Components */
var TodoApp = require('TodoApp');

/* Load Foundation */
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
