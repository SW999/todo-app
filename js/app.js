const React = require('react');
const ReactDOM = require('react-dom');
const TodoList = require('./Components/todoList');
import {Grid, Row, Col, Panel, Glyphicon} from 'react-bootstrap';
const TodoForm = require('./Components/todoForm');
const AlertStore = require('./Stores/ListStore');

const TodoApp = React.createClass({

    getInitialState: function () {
        return {
            items: AlertStore.getAll()
        };
    },

    componentWillMount: function() {
        AlertStore.addChangeListener(this.updateItems);
    },

    componentWillUnmount: function() {
        AlertStore.removeChangeListener(this.updateItems);
    },

    render: function () {
        return (
            <Grid className="app-wrapper">
                <Row>
                    <Col xs={6} xsOffset={3}>
                        <Panel header={<h1><Glyphicon glyph="tasks"/> TODO</h1>} bsStyle="primary">
                            <TodoList items={this.state.items}/>
                            <TodoForm/>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    },

    updateItems: function () {
        this.setState({
            items: AlertStore.getAll()
        });
    }
});

ReactDOM.render(<TodoApp/>, document.getElementById('app'));
