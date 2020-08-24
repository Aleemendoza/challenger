import React from 'react';
export default class Fechas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      datos: []
    };
  }
 
  componentDidMount() {
    fetch("http://localhost:3001/fecha")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            datos: result.datos
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
 
  render() {
    
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">owner</th>
              <th className="text-center">id_lote</th>
              <th className="text-center">repactado_a</th>
            </tr>
          </thead>
          
        </table>
 
      );
    };
  }