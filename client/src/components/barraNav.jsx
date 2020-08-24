import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'





export default function BarraNav(){

  const [value, setValue] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios.get('http://localhost:3001/').then(res => setValue(res.data))
  }, [])


  const handleDatosClick = () => {
      setLoading(true);
      axios.get('http://localhost:3001/').then(() => {
        setLoading(false);
      });
  }

  const handleFechasClick = () => {
      setLoading(true);
      axios.get('http://localhost:3001/fecha').then(() => {
        setLoading(false);
      });
  }


  return (

    <div class="contenPrin">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <span class="navbar-brand">Mi App</span>
          <div className="w-70">
          <FormControl>
          <div className=''> 

             <Button  aria-controls="customized-menu"
                      aria-haspopup="true"
                      color="primary" 
                      variant='contained' 
                      className='button' 
                      href="http://localhost:3000/grafico"
                      onClick={handleDatosClick}> Filtrar datos </Button>
        
             <Button 
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="primary" 
                variant='contained' 
                className='button' 
             onClick={handleFechasClick}>Filtrar por fechas_desde</Button>
        
          </div>
        </FormControl>
          </div>
        </nav>
      </div>
  );
}