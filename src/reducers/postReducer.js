import { FETCH_POSTS, FETCH_POST } from "../actions/types";
//import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
