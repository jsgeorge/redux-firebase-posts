import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import _ from "lodash";

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const { post } = this.props;
    if (!post) return <div>ERror</div>;
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, actions)(PostDetail);
