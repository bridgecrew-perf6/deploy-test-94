import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contato from './Contato'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="/contato" element={<Contato />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
