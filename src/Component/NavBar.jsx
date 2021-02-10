import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { count } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar
          <span className="badge rounded-pill bg-secondary">{count}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
