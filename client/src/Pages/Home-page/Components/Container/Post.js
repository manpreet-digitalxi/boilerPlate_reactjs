import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsersRequest } from "../../Actions";
import PostList from "../Presentation/PostList";

class Post extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    const { posts } = this.props.postList;
    return <PostList posts={posts} />;
  }
}

Post.propTypes = {
  getUsersRequest: PropTypes.func.isRequired,
  postList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  postList: state.post
});

export default connect(
  mapStateToProps,
  {
    getUsersRequest
  }
)(Post);
