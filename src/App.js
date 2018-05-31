import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Structure from './structure/Structure';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Structure />
      </BrowserRouter>
    );
  }
}

export default App;
