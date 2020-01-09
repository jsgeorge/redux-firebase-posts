import store from "../store";
import { fetchPosts } from "../actions";

export function onPostsEnter() {
  store.dispatch(fetchPosts());
}
