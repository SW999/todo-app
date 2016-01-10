var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroupItem = Bootstrap.ListGroupItem;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var ButtonGroup = Bootstrap.ButtonGroup;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;

var TodoListItem = React.createClass({
  render: function(){
    return (
      <ListGroupItem bsStyle={this.props.isReady ? 'success' : 'warning'} className={this.props.isReady ? 'task-is-ready' : ''}>
       <ButtonToolbar bsClass="fl-r">
        <ButtonGroup bsSize="xsmall">
          <Button bsStyle="primary" onClick={this.props.editItem} title="Edit"><Glyphicon glyph="pencil" /></Button>
          <Button bsStyle="success" onClick={this.props.readyItem} title="Success"><Glyphicon glyph="ok" /></Button>
          <Button bsStyle="danger" onClick={this.props.delItem} title="Remove"><Glyphicon glyph="remove" /></Button>
        </ButtonGroup>
      </ButtonToolbar>
        <span className="item-text">{this.props.children}</span>
      </ListGroupItem>
    );
  }
});

module.exports = TodoListItem;
