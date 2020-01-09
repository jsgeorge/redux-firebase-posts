import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import _ from "lodash";
import ListImage from "./listImage";

class ListImages extends Component {
  renderPosts() {
    const { posts } = this.props;
    const showPosts = _.map(posts, (value, key) => {
      if (value.imagePath) return <ListImage key={key} id={key} post={value} />;
    });
    if (!_.isEmpty(showPosts)) {
      return showPosts;
    }
    return <div>No current Images</div>;
  }

  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>{this.renderPosts()}</div>;
  }
}
function mapStateToProps({ posts }) {
  console.log(posts);
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(ListImages);
//export default connect(mapStateToProps)(ListImages);
