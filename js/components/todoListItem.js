var React = require('react');

var TodoListItem = React.createClass({
  render: function(){
    return (
      <li>{this.props.children}</li>
    );
  }
});

module.exports = TodoListItem;
