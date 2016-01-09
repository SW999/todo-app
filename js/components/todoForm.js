var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require('react-bootstrap');
var Input = Bootstrap.Input;
var Button = Bootstrap.Button;

var innerButton = <Button type="submit" bsStyle="info">Add</Button>;
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
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <Input type="text" label="Create new task: " labelClassName="col-xs-4" wrapperClassName="col-xs-5" ref='item' id="newTaskInput" onChange={this.onChange} value={this.state.item} buttonAfter={innerButton}/>
      </form>
    );
  }
});

module.exports = TodoForm;
