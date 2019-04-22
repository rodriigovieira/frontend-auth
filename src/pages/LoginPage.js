import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { Link } from 'react-router-dom';

import axios from 'axios'

import './LoginPage.css';

export default class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  }

  handleLogin = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/api/users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.status !== 200) {
          this.setState({ error: true })
          return null
        }

        this.setState({ error: false })

        console.log(res)

        localStorage.setItem('csrf', res.data.csrfToken)
        localStorage.setItem('token', res.data.token)

        this.props.history.push('/usuarios')
      })
      .catch(e => {
        this.setState({ error: true })
        console.log(e)
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow className="form">
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login
                </h3>
                </MDBCardHeader>

                {this.state.error && ('Login ou senha incorretos.')}
                
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Digite seu e-mail"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Digite sua senha"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                      onClick={this.handleLogin}
                    >

                        Efetuar Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <Link to="/registrar">Criar Conta</Link>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
