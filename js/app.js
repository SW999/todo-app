var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todoList');
var TodoForm = require('./components/todoForm');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Glyphicon = Bootstrap.Glyphicon;

var TodoApp = React.createClass({
  getInitialState: function () {
    return {items: [
      {
        text: 'Todo item #1',
        ready: false
      },
      {
        text: 'Todo item #2',
        ready: false
      }
    ]};
  },
  updateItems: function (newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({
      items: allItems
    });
  },
  render: function () {
    return (
      <Grid className="app-wrapper">
        <Row>
          <Col xs={6} xsOffset={3}>
            <Panel header={<h1><Glyphicon glyph="tasks" /> TODO</h1>} bsStyle="primary">
              <TodoList items={this.state.items}/>
              <TodoForm onFormSubmit={this.updateItems}/>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
});

ReactDOM.render(<TodoApp/>, document.getElementById('app'));
