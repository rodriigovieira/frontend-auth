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
import { Link } from 'react-router-dom'

import Menu from '../components/Menu'

import './CreateUserPage.css';

const CreateUserPage = () => {
  return (
    <React.Fragment>
      <Menu />
      <MDBContainer>
        <MDBRow className="form">
          <MDBCol md="5">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Criar Conta
                </h3>
                </MDBCardHeader>
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
                    />
                    <MDBInput
                      label="Digite sua senha"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Digite novamente sua senha"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                    >
                      Efetuar Login
                </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <Link to="/">Efetuar Login</Link>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
};

export default CreateUserPage;
