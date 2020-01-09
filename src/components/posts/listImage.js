import React, { Component } from "react";
import { deletePost } from "../../actions";
import { connect } from "react-redux";

class ListImage extends Component {
  render() {
    const { id, post } = this.props;
    return (
      <div className="imgItem">
        <img
          src={post.imagePath}
          alt="image"
          style={{ hieght: "100%", width: "100%" }}
        />
      </div>
    );
  }
}

export default connect(null)(ListImage);
