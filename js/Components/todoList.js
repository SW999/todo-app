const React = require('react');
const TodoListItem = require('./todoListItem');
import {ListGroup} from 'react-bootstrap';

module.exports = React.createClass({

    displayName: 'TodoList',

    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            ready: React.PropTypes.bool
        })).isRequired
    },

    getDefaultProps: function() {
        return {
            items: []
        };
    },

    render: function () {
        let items = !!this.props.items.length ? this.getItems() : (<h4>There is nothing to do!</h4>);

        return <ListGroup componentClass="ul">{items}</ListGroup>;
    },
    
    getItems: function () {
        return this.props.items.map((item, i) => {
            return (
                <TodoListItem
                    key={i}
                    itemValue={(i + 1) + '. ' + item.text}
                    delItem={this.deleteItem.bind(null, null, item)}
                    readyItem={this.doItemReady.bind(null, null, item)}
                    isReady={item.ready}
                />
            );
        });
    },

    deleteItem: function (e, item) {// TODO: use a Flux event
        let cutedItems = this.props.items.splice(this.props.items.indexOf(item), 1);
        this.setState({items: cutedItems});
    },

    doItemReady: function (e, item) {
        let toggleReady = this.props.items[this.props.items.indexOf(item)],
            readyValue = toggleReady.ready;

        this.props.items[this.props.items.indexOf(item)].ready = !readyValue;
        this.setState({items: this.props.items});
    }
});
