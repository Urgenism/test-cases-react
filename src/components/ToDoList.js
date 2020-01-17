import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../store/actions/posts';

class ToDoList extends Component {
  componentDidMount() {
    this.props.fetchToDo();
  }

  renderPosts = () => {
    return this.props.posts.map((post, index) => {
      return <li key={index}>{post}</li>;
    });
  };

  render() {
    return (
      <div className='mt-5'>
        <h3>Tasks</h3>
        <hr />
        <ol>{this.renderPosts()}</ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchToDo: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
