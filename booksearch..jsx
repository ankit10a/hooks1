import React, { Component } from "react";
import BooksDisp from "./bookdisplay";
import http from "./../Services/httpservices";
import config from "./config.json";

class BookSearch extends Component {
  state = {
    booklist: []
  };
  async componentDidMount() {
    let url = config.callapi + "/" + "booksapp/books";
    const { data: booklist } = await http.get(url);
    this.setState({ booklist });
  }
  async componentDidUpdate() {
    let k = this.props.location.search;
    let p;
    if (!k) {
      p = this.props.location.pathname;
    }
    console.log(k);
    let url = "";
    if (k) {
      url = config.callapi + "/booksapp/books/" + k;
    } else {
      url = config.callapi + "/booksapp/" + p;
    }
    const { data: booklist } = await http.get(url);
    this.setState({ booklist });
    console.log(booklist);
  }
  render() {
    const { booklist } = this.state;
    return (
      <div className="row ">
        <div className="col-2 text-center">
          <h4>Left Pannel</h4>
        </div>
        <div className="col-10">
          <BooksDisp bookdata={booklist} />
        </div>
      </div>
    );
  }
}

export default BookSearch;
