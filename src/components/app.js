import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListPosts from "./posts";
import ListImages from "./posts/listImages";
import PostDetail from './posts/postDetail.js';

//import { onPostsEnter } from "../routes/route_callback";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={ListPosts} />
        <Route path="/images" component={ListImages} />
        <Route path="/posts/:id" component={PostDetail}/>
      </Router>
    );
  }
}

export default App;
