import React, { useState } from 'react';
import {
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(65,27,102);
  background: linear-gradient(0deg, rgba(65,27,102,1) 9%, rgba(65,27,102,0.018) 70%);
`;

const Sub = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  @media (max-width: ${breakpoints.mobile}) {
width: 70%;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
 width: 50%;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup_Inner = styled.div`
  background: linear-gradient(135deg, rgba(65, 27, 102, 1), rgba(65, 27, 102, 0));
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #ffffff;
    transition: color 0.3s ease;

    &:hover {
      color: #ff7675;
    }
  }
  
  .submit {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #ffffff;
    color: #411b66;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background-color: #411b66;
      color: white;
    }
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #3498db;
    border-radius: 5px;
    outline: none;
    background-color: transparent;
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const Span = styled.span`
  font-size: 17px;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Header = styled.h5`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: white;
  margin-bottom: 15px;
`;

const Input = styled(MDBInput)`
  border: 1px solid black;
  background-color: transparent;
  color: white;
  outline: none;

  &:focus {
    outline: none;
    border-color: #3498db;
  }

  &::placeholder {
    color: white;
    opacity: 0.8;
  }
`;

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <Main>
      <Sub>
        <Input label="Please enter Mobile Number" id="typePhone" type="tel" />
        <Span onClick={openPopup} className="input-group-text">
          <MDBIcon className="text-dark" far icon="paper-plane" />
        </Span>
      </Sub>

      {isOpen && (
        <Popup>
          <Popup_Inner>
            <span onClick={closePopup} className="material-symbols-outlined close">
              close
            </span>
            <Header>Enter your OTP</Header>
            <input type="text" placeholder="OTP" />
            <Link to="/home">
              <button className="submit">Submit</button>
            </Link>
          </Popup_Inner>
        </Popup>
      )}
    </Main>
  );
}

export default Login;
