import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route path='/' exact></Route>
              {/* Chat */}
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
