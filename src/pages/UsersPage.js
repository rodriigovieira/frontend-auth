import React, { Component } from 'react'
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
  MDBBtn
} from 'mdbreact';
import { Link } from 'react-router-dom'

import Menu from '../components/Menu'

import './UsersPage.css'

export default class UsersPage extends Component {
  render() {
    return (
      <div>
        <Menu className="navbar" />
        <MDBTable bordered className="content">
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <Link to="/editar">
                  <MDBTooltip
                    placement="top"
                    domElement
                  >
                    <span>Roberto</span>
                    <span>
                      Editar Usuário
    </span>
                  </MDBTooltip>
                </Link>
              </td>
              <td>
                <Link to="/editar">
                  <MDBTooltip
                    placement="right"
                    domElement
                  >
                    <span>Santos</span>
                    <span>
                      Editar Usuário
    </span>
                  </MDBTooltip>
                </Link>
              </td>
              <td>
                <Link to="/editar">
                  <MDBTooltip
                    placement="bottom"
                    domElement
                  >
                    <span>roberto@roberto.com</span>
                    <span>
                      Editar Usuário
    </span>
                  </MDBTooltip>
                </Link>
              </td>
              <td>
                <Link to="/editar">
                  <MDBTooltip
                    placement="left"
                    domElement
                  >
                    <span>DELETAR</span>
                    <span>
                      Editar Usuário
    </span>
                  </MDBTooltip>
                </Link>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div >
    )
  }
}
