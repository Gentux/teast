import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: props.route
    }
  }

  render() {
    const currentPage = <span className="sr-only">(current)</span>

    return(
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Tea List => Teast</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/#teaList" onClick={this.props.routeFct.bind(this, "teaList")}>Liste de thés {this.state.route === "teaList" ? currentPage : ""}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#addTea" onClick={this.props.routeFct.bind(this, "addTea")}>Ajouter un thé {this.state.route === "addTea" ? currentPage : ""}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
