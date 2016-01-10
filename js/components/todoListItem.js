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
      <ListGroupItem bsStyle="warning">
       <ButtonToolbar bsClass="fl-r">
        <ButtonGroup bsSize="xsmall">
          <Button bsStyle="primary" title="Edit"><Glyphicon glyph="pencil" /></Button>
          <Button bsStyle="success" title="Success"><Glyphicon glyph="ok" /></Button>
          <Button bsStyle="danger" title="Remove"><Glyphicon glyph="remove" /></Button>
        </ButtonGroup>
      </ButtonToolbar>
        {this.props.children}
      </ListGroupItem>
    );
  }
});

module.exports = TodoListItem;
