import React from 'react';
import './App.css';
import BarraNav from './components/barraNav.jsx'
import {Route, BrowserRouter } from 'react-router-dom'
import MostrarFecha from './components/componente.jsx'
import LineChart from './components/myCharts.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      	<Route exact path='/' component={ BarraNav } />
        <Route exact path='/mostrarfecha' component={ MostrarFecha } />
        <Route exact path='/grafico' component={ LineChart } />
      </BrowserRouter>
    </div>
  );
}

export default App;