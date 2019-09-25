import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import Posts from './Components/Posts';
import PostForm from './Components/Postform';

import store from './store.js';

class App extends React.Component {
  render() {   
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PostForm />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
