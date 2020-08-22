import React from 'react';

export default class Fechas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fechas_desde: []
    };
  }
 
  componentDidMount() {
    fetch("https://localhost:3001/fechas")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            fechas_desde: result.fechas_desde
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
    const { error, isLoaded, postres } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div> Cargando ... </div>;
    } else {
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
          <tbody>
 
          {postres.map(item => (         
          
            <tr>
              <th className="text-center" id={item.id}>{item.id}</th>
              <td className="text-center">{item.owner}</td>
              <td className="text-center">{item.id_lote}</td>
              <td className="text-center">{item.repactado_a}</td>
            </tr>
 
          ))}
 
          </tbody>
        </table>
 
      );
    }
  }
}
