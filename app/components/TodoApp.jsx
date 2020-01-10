var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

/* Custom Components */
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    render: function() {
        return(
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="grid-x align-center">
                    <div className="cell small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;
