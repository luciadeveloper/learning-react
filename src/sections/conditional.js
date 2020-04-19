import React, { Component } from 'react';


class LoginButton extends Component {
  render(){
    return <button>Iniciar sesion</button>
  }
}


class LogoutButton extends Component {
  render(){
    return <button>Cerrar sesion</button>
  }
}



export default class ConditionalSection extends Component {
  constructor() {
    super()
    this.state = {mostrarA: true}
  }
  render () {
   
    return (
      <div>
        <h4>Conditional render</h4>
        {this.state.mostrarA 
        ? <LoginButton />
        : <LogoutButton />}
      </div>
    )
  }
}