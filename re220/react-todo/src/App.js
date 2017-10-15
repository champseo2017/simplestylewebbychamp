import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home'
import Main from './Main'
import Contact from './Contact'
import Examples from './Examples'
import Apage from './Apage'
import Anotherpage from './Anotherpage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       

          <Main>

          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Examples" component={Examples} />
          <Route path="/Apage" component={Apage} />
          <Route path="/Anotherpage" component={Anotherpage} />


          </Main>


        
      </BrowserRouter>
    );
  }
}

export default App;
