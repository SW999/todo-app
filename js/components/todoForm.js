var React = require('react');
var ReactDOM = require('react-dom');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {item: ''};
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    ReactDOM.findDOMNode(this.refs.item).focus();
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

module.exports = TodoForm;
