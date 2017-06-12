const React = require('react');
import {Input, Button, } from 'react-bootstrap';
const innerButton = <Button type="submit" bsStyle="info">Add</Button>;
const ListActions = require('../Actions/ListActions');


module.exports = React.createClass({

    displayName: 'TodoForm',

    getInitialState: function () {
        return {
            item: {
                text: ''
            }
        };
    },

    render: function () {
        return (
            <form onSubmit={this.handleSubmit} className="form-horizontal">
                <Input
                    type="text"
                    label="Create new task:"
                    labelClassName="col-xs-4"
                    wrapperClassName="col-xs-7"
                    id="newTaskInput"
                    onChange={this.onChange}
                    value={this.state.item.text}
                    buttonAfter={innerButton}
                />
            </form>
        );
    },

    handleSubmit: function (e) {
        e.preventDefault();

        if (!this.state.item.text) {
            document.getElementById('newTaskInput').focus();
            return false;
        }

        this.createNewItem();
        this.setState({
            item: {text: ''}
        });
    },

    onChange: function (e) {
        this.setState({
            item: {text: e.target.value}
        });
    },

    createNewItem: function() {
        ListActions.add(this.state.item);
    }
});
