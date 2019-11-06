import React, { Component } from "react";

class BooksDisp extends Component {
  state = {};
  render() {
    const { bookdata } = this.props;
    console.log(bookdata);
    return (
      <div className="container ">
        <div className="row text-center">
          <div className="col-3 border bg-primary">Title</div>
          <div className="col-3 border bg-primary">Author</div>
          <div className="col-2 border bg-primary">Language</div>
          <div className="col-2 border bg-primary">Genre</div>
          <div className="col-1 border bg-primary">Price</div>
          <div className="col-1  text-truncate border bg-primary">
            BestSeller
          </div>
        </div>
        {bookdata.data ? (
          <div>
            {bookdata.data.map(n => (
              <div className="row text-center">
                <div className="col-3 border text-truncate">{n.name}</div>
                <div className="col-3 border text-truncate">{n.author}</div>
                <div className="col-2 border text-truncate">{n.language}</div>
                <div className="col-2 border text-truncate">{n.genre}</div>
                <div className="col-1 border text-truncate">{n.price}</div>
                <div className="col-1 border text-truncate">{n.bestseller}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default BooksDisp;
