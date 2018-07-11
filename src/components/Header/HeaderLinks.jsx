import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";


class HeaderLinks extends Component {
    render() {
        return (
      <div>
        <Nav>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
              Welcome!
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
