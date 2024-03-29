import { Button } from '@material-ui/core';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function ChatInput({ chatRef, channelName, channelId }) {
  const [user] = useAuthState(auth);

  // const inputRef = useRef(null);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault(); // this prevents refresh
    if (!channelId) return;

    db.collection('rooms').doc(channelId).collection('messages').add({
      // message: inputRef.current.value,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          // ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message # ${channelName}`}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
