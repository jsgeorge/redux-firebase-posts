import _ from "lodash";

import { postsRef } from "../firebase";
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from "./types";

// const INITIAL_POSTS = {
//   123: "One world goernemtns",
//   345: "Weierd al yankovich"
// };
//const Posts = new Firebase("https://angularblog-c9213.firebaseio.com/posts");

//export function fetchPosts() {
//return {
// type: FETCH_POSTS,
// payload: INITIAL_POSTS
//};
export function fetchPosts() {
  return dispatch => {
    postsRef.on("value", snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchPost(id) {
  return dispatch => {
    postsRef.child(id).on("value", snapshot => {
      dispatch({
        type: FETCH_POST,
        payload: snapshot.val()
      });
    });
  };
}
export function createPost(post) {
  console.log(post);
  return dispatch => postsRef.push(post);
}
export function deletePost(key) {
  return dispatch => postsRef.child(key).remove();
}
