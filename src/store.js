import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
export default store;
