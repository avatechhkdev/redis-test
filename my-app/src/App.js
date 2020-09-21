import React from 'react';
import './App.css';
import SockPage from './SockPage';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


function App() {

  return (

    <BrowserRouter>
      <Route path="/" component={SockPage} />
    </BrowserRouter>
  );
}

export default App;
