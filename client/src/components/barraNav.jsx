import React from 'react';
import { Link } from 'react-router-dom';
import BotonFiltrar from './botonFiltrar.jsx'
import 'bootstrap/dist/css/bootstrap.css';


export default function BarraNav(){

	return(
		<div className="contenPrin">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand"> My app!</span>
	         <BotonFiltrar/>

          <div className="w-100">
          </div>
        </nav>

      </div>
		)

}