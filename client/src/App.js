import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarraNav from './components/barraNav.jsx'
import {Route, BrowserRouter } from 'react-router-dom'
import MostrarFecha from './components/componente.jsx'
import LineChart from './components/myCharts.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/mostrarfecha' components={ MostrarFecha } />
        <Route exact path='/grafico' components={ LineChart } />
      </BrowserRouter>
    </div>
  );
}

export default App;