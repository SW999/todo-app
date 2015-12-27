var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: ['Todo item #1', 'Todo item #2']};
  },
  updateItems: function(newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({
      items: allItems
    });
  },
  render: function() {
    return (
      <div>
        <h3>TODO list</h3>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return (
        <TodoListItem>{itemText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoListItem = React.createClass({
  render: function(){
    return (
      <li>{this.props.children}</li>
    );
  }
});

var TodoForm = React.createClass({
  getInitialState: function() {
    return {item: ''};
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    React.findDOMNode(this.refs.item).focus();
    return false;
  },
  onChange: function(e){
    this.setState({
      item: e.target.value
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newTaskInput">Create new task: </label>
        <input type='text' ref='item' id="newTaskInput" onChange={this.onChange} value={this.state.item}/>
        <input type='submit' value='Add'/>
      </form>
    );
  }
});

React.render(<TodoApp/>, document.getElementById('todo'));
