import React, { Component } from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSearch from "./booksearch.";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>
          <Switch>
            <Route path="/books/:booksearch" component={BookSearch} />
            <Route path="/books" component={BookSearch} />
            <Redirect to="/books" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainPage;
