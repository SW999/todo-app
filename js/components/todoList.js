var React = require('react');
var TodoListItem = require('./todoListItem');

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, i) {
      return (
        <TodoListItem key={i}>{itemText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

module.exports = TodoList;
