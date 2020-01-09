import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import _ from "lodash";
import ListItem from "./listItem";

class ListPosts extends Component {
  state = { title: "", category: "", post: "" };
  renderAddForm() {
    return (
      <div>
        <h3>Create a Post</h3>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a title"
              value={this.state.title}
              onChange={this.handleTitleInputChange.bind(this)}
            />
          </div>
          {/* <div className="form-group">
            <input
              className="form-control"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleCtgryInputChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="What's on you mind"
              value={this.state.post}
              onChange={this.handlePostInputChange.bind(this)}
            /> 
            </div>*/}
          <button action="submit" className="btn btn-primary">
            Create Post
          </button>
        </form>
      </div>
    );
  }
  renderPosts() {
    const { posts } = this.props;
    const showPosts = _.map(posts, (value, key) => {
      return <ListItem key={key} id={key} post={value} />;
    });
    if (!_.isEmpty(showPosts)) {
      return showPosts;
    }
    return <div>No current posts</div>;
  }
  handlePostInputChange(e) {
    this.setState({ post: e.target.value });
  }
  handleCtgryInputChange(e) {
    this.setState({ category: e.target.value });
  }
  handleTitleInputChange(e) {
    this.setState({ title: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.createPost({ post: this.state.post });
    this.setState({ post: "", title: "", category: "" });
  }

  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        {this.renderAddForm()}
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, actions)(ListPosts);
