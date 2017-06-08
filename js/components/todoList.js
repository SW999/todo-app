var React = require('react');
var TodoListItem = require('./todoListItem');
var ListGroup = require('react-bootstrap').ListGroup;

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
        var items = !!this.props.items.length ? this.getItems() : (<h4>There is nothing to do!</h4>);

        return <ListGroup componentClass="ul">{items}</ListGroup>;
    },
    
    getItems: function () {
        var self = this;

        return this.props.items.map(function (item, i) {
            return (
                <TodoListItem
                    key={i}
                    itemValue={(i + 1) + '. ' + item.text}
                    delItem={self.deleteItem.bind(null, null, item)}
                    readyItem={self.doItemReady.bind(null, null, item)}
                    isReady={item.ready}
                />
            );
        });
    },

    deleteItem: function (e, item) {
        var cutedItems = this.props.items.splice(this.props.items.indexOf(item), 1);
        this.setState({items: cutedItems});
    },

    doItemReady: function (e, item) {
        var toggleReady = this.props.items[this.props.items.indexOf(item)],
            readyValue = toggleReady.ready;

        this.props.items[this.props.items.indexOf(item)].ready = !readyValue;
        this.setState({items: this.props.items});
    }
});
