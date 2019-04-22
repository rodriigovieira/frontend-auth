import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
  from 'mdbreact';

import { Link } from 'react-router-dom'
import axios from 'axios';

class Menu extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  handleLogout = () => {
    axios.request({
      url: 'http://localhost:3000/api/users/logout',
      method: 'put',
      headers: {
        CSRFtoken: localStorage.getItem('csrf')
      }
    })
      .then(res => console.log(res))
      .catch(e => {
        console.log(e)
        console.log(e.title)
        console.log(e.msg)
      })
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
                  <Link
                    onClick={this.handleLogout}
                    to="/"
                  >
                    Finalizar Sessão
                  </Link>
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