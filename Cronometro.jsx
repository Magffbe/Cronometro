import React, { Component } from 'react';
import BotonControl from './BotonControl';
import Reloj from './Reloj';


class Cronometro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tiempo: 0,
        corriendo: false,
      };
    }
  
    controlarCronometro = () => {
      if (this.state.corriendo) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(() => {
          this.setState({ tiempo: this.state.tiempo + 1 });
        }, 1000);
      }
      this.setState({ corriendo: !this.state.corriendo });
    };
  
    reiniciarCronometro = () => {
      clearInterval(this.interval);
      this.setState({ tiempo: 0, corriendo: false });
    };
  
    render() {
      return (
        <>
          <Reloj tiempo={this.state.tiempo} />
          <BotonControl
            corriendo={this.state.corriendo}
            controlarCronometro={this.controlarCronometro}
            reiniciarCronometro={this.reiniciarCronometro}
          />
        </>
      );
    }
  }
  
  export default Cronometro;