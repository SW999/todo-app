var React = require('react');
var TodoListItem = require('./todoListItem');
var Bootstrap = require('react-bootstrap');
var ListGroup = Bootstrap.ListGroup;

var TodoList = React.createClass({
  deleteItem: function (e, item) {
    var cutedItems = this.props.items.splice(this.props.items.indexOf(item), 1);
    this.setState({items: cutedItems});
  },
  doItemReady: function(e, item) {
    var toggleReady = this.props.items[this.props.items.indexOf(item)];
    var readyValue = toggleReady.ready;
    this.props.items[this.props.items.indexOf(item)].ready = !readyValue;
    this.setState({items: this.props.items});
  },

  editItem: function (itemNewText) {
    alert(itemNewText);
  },

  render: function () {
    var self = this;
    var createItem = function (itemText, i) {
      var t = (i + 1) + '. ' + itemText.text;
      return (
        <TodoListItem key={i} itemText={t} editItem={self.editItem} delItem={self.deleteItem.bind(null, null, itemText)} readyItem={self.doItemReady.bind(null, null, itemText)} isReady={itemText.ready} />
      );
    };
    return <ListGroup componentClass="ul">{this.props.items.map(createItem)}</ListGroup>;
  }
});

module.exports = TodoList;
