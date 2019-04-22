import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
  from 'mdbreact';

import { Link } from 'react-router-dom'

class Menu extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    return (
      <MDBContainer>
        <MDBNavbar color="light-blue lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer>
            <MDBNavbarBrand>
              Navbar
          </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
            <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <MDBNavItem>
                  <Link to="/usuarios">Mostrar Lista de Usuários</Link>
                </MDBNavItem>
                <MDBNavItem active>
                  <Link to="/criar">Criar Usuário</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/">Finalizar Sessão</Link>
                </MDBNavItem>
              </NavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default Menu;