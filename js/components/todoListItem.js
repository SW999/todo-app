var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroupItem = Bootstrap.ListGroupItem;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var ButtonGroup = Bootstrap.ButtonGroup;
var Input = Bootstrap.Input;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;

var TodoListItem = React.createClass({
  
  propTypes: {
    itemText: React.PropTypes.string.isRequired,
  },

  getInitialState: function () {
      return {
         editMode: false,
         itemNewText: this.props.itemText
      };
  },

  render: function(){
    var innerGlyphicon = <Button bsStyle="success" onClick={this.markAsNotEdit} title="Success"><Glyphicon glyph="ok" /></Button>;
    return (
      <ListGroupItem bsStyle={this.props.isReady ? 'success' : 'warning'} className={this.props.isReady ? 'task-is-ready' : ''}>
       <ButtonToolbar bsClass="fl-r">
        <ButtonGroup bsSize="xsmall">
          <Button bsStyle="primary" onClick={this.markAsEdit} title="Edit"><Glyphicon glyph="pencil" /></Button>
          <Button bsStyle="success" onClick={this.props.readyItem} title="Success"><Glyphicon glyph="ok" /></Button>
          <Button bsStyle="danger" onClick={this.props.delItem} title="Remove"><Glyphicon glyph="remove" /></Button>
        </ButtonGroup>
      </ButtonToolbar>
        {!this.state.editMode && <span className="item-text">{this.state.itemNewText}</span>}
        {this.state.editMode && <Input type="text" ref="itemNewText" label="Text" placeholder="Enter text" defaultValue={this.state.itemNewText} addonAfter={innerGlyphicon}/>}
      </ListGroupItem>
    );
  },

  markAsEdit: function () {
    this.setState({editMode: true});
    //this.props.editItem
  },

  markAsNotEdit: function () {
    var itemNewText = this.refs.itemNewText.getValue();
    this.setState({
      editMode: false,
      itemNewText: itemNewText
    });

    this.props.editItem(itemNewText);
  }
});

module.exports = TodoListItem;
