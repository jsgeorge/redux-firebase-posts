import React, { Component } from "react";
import { deletePost } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListItem extends Component {
  handleDelete = id => {
    this.props.deletePost(id);
  };
  render() {
    const { id, post } = this.props;
    return (
      <div className="postItem">
        <h5>
          <Link to={`/posts/${id}`}>{post.title}</Link>
        </h5>
        {/* <p>{post.text}</p> */}
        <button className=" postDel" onClick={() => this.handleDelete(id)}>
          delete
        </button>
      </div>
    );
  }
}

export default connect(null, { deletePost })(ListItem);
