import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import { Router, RouteComponentProps } from '@reach/router';
import Home from './pages/Home';
import Fav from './pages/Fav';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path='/'>
          <RouterPage pageComponent={<Home />} path='/' />
          <RouterPage pageComponent={<Fav />} path='/faves' />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
