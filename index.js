import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


/* function ComponenteA(props){
  //console.log(props.children);
  //return <p>Hola {props.nombre}</p>;
  return props.children;
}

function ComponenteB(props){
  return <p>{props.nombre}: 10</p>;
}

class ComponenteDeClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>;
  }
} */

class Contador extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };
  }

  aumentar= ()=>{
    this.setState(
      {contador:this.state.contador + 1 }
    )}

  render(){
    return (<div>
      <p>{this.state.contador}</p>
      <button onClick={ this.aumentar }>Aumentar</button>
    </div>);
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Carlos";
    return (
      <div>
        < Contador />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
