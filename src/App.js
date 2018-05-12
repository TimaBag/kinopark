import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
/*import './styles/bootstrap.css';
import './styles/reset.css';
import './styles/style.css';
import './styles/media.css';
import './styles/font.css';
import './styles/font-awesome.css';
import './styles/bootstrap-select.css';*/
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
