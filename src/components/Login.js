import { Button } from '@material-ui/core';
import { SignalWifiOffOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png'
          alt=''
        />
        <h1>Sign In to the App</h1>
        <p>fake.slack.com</p>

        <Button onClick={signIn}>Sign In with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }

  > h1 {
  }

  > p {
  }
`;
