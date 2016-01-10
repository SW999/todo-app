var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require('react-bootstrap');
var Input = Bootstrap.Input;
var Button = Bootstrap.Button;

var innerButton = <Button type="submit" bsStyle="info">Add</Button>;
var TodoForm = React.createClass({
  getInitialState: function() {
    return {item: {text: '', ready: false}};
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.item, this.state.scs);
    this.setState({item: {text: '', ready: false}});
    ReactDOM.findDOMNode(this.refs.item).focus();
  },
  onChange: function(e){
    this.setState({
      item: {text: e.target.value, ready: false}
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <Input type="text" label="Create new task:" labelClassName="col-xs-4" wrapperClassName="col-xs-7" ref='item' id="newTaskInput" onChange={this.onChange} value={this.state.item.text} buttonAfter={innerButton}/>
      </form>
    );
  }
});

module.exports = TodoForm;
