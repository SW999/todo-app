var React = require('react');
var TodoListItem = require('./todoListItem');
var Bootstrap = require('react-bootstrap');
var ListGroup = Bootstrap.ListGroup;

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, i) {
      return (
        <TodoListItem key={i}>{itemText}</TodoListItem>
      );
    };
    return <ListGroup componentClass="ul">{this.props.items.map(createItem)}</ListGroup>;
  }
});

module.exports = TodoList;
