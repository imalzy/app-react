/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import React, { Fragment, useContext } from 'react';
import { Store } from './Store';
import './App.css';
import {Link} from '@reach/router';


function App(props:any): JSX.Element {
  const { state } = useContext(Store);
  // console.log('state', props);
  return (
    <Fragment>
      <div className='container'>
        <header className='header'>
          <h1>List Film</h1>

          <div style={{fontSize:14}}>
            <Link to='/' style={{marginRight:14, textDecoration:'none'}}>Home</Link>
            <Link to='/faves' style={{textDecoration:'none'}}>Favourite (s) : {state.favorites.length}</Link>
          </div>
        </header>
      {props.children}
      </div>
    </Fragment>
  );
}

export default App;
