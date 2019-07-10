var React = require('react');

/* Custom Components */
var TodoList = require('TodoList');
var AppTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Leave mail on porch'
                },
                {
                    id: 4,
                    text: 'Take out the trash'
                }
            ]
        };
    },
    handleAddTodo: function(text) {
        alert('new todo: ' + text);
    },
    render: function() {
        var {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos} />
                <AppTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;
