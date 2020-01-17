import React, { Component } from 'react';
import { connect } from 'react-redux';

import { savePost } from '../store/actions/posts';

class ToDoForm extends Component {
  state = {
    todoInput: ''
  };

  inputChangeHandler = e => {
    this.setState({ todoInput: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.savePost(this.state.todoInput);
    this.setState({ todoInput: '' });
  };

  render() {
    return (
      <div>
        <h3>Add tasks</h3>
        <hr />
        <form onSubmit={this.submitHandler}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='todo'
              placeholder='Enter task'
              value={this.state.todoInput}
              onChange={this.inputChangeHandler}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    savePost: post => dispatch(savePost(post))
  };
};

export default connect(null, mapDispatchToProps)(ToDoForm);
