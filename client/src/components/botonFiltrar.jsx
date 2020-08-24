 
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import BotonFiltrar from '@material-ui/core/Button';

export default function Filtrar(){

const setFechasDesde = React.useState([]);
	
	React.useEffect(() => {

		const fetchData = async () => {
			const response = await axios.get('http://localhost:3001/fecha');
			
			setFechasDesde(response.data);
		
		};

	 fetchData();

}, []);



return (
 	<div className="bg-dark">

 		<h1> Boton Filtrar  </h1>
    </div>
	)



}
