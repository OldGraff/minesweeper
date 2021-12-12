import './axios.config';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppRoot } from './AppRoot';


const mountNode = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <AppRoot />
  </BrowserRouter>,
  mountNode,
);
