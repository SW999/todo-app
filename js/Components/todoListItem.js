var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroupItem = Bootstrap.ListGroupItem;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var ButtonGroup = Bootstrap.ButtonGroup;
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;

module.exports = React.createClass({

    displayName: 'TodoListItem',

    getInitialState: function () {
        return {
            editMode: false,
            itemNewText: this.props.itemValue
        }
    },

    render: function () {
        return (
            <ListGroupItem bsStyle={this.props.isReady ? 'success' : 'warning'} className={this.props.isReady ? 'task-is-ready' : ''}>
                <ButtonToolbar bsClass="fl-r">
                    <ButtonGroup bsSize="xsmall">
                        <Button bsStyle="primary" onClick={this.triggerEdit} title="Edit" type="button"><Glyphicon glyph="pencil"/></Button>
                        <Button bsStyle="success" onClick={this.props.readyItem} title="Success" type="button"><Glyphicon glyph="ok"/></Button>
                        <Button bsStyle="danger" onClick={this.props.delItem} title="Remove" type="button"><Glyphicon glyph="remove"/></Button>
                    </ButtonGroup>
                </ButtonToolbar>
                {!this.state.editMode
                    ? <span className="item-text">{this.state.itemNewText}</span>
                    : <input type="text" className="edit-name-input" onChange={this.onChange} defaultValue={this.state.itemNewText} placeholder="Add new task name"/>
                }
            </ListGroupItem>
        );
    },

    triggerEdit: function () {
        this.setState({editMode: !this.state.editMode});
    },

    onChange: function (e) {
        this.setState({itemNewText: e.target.value});
    }
});
