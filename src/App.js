import React, { Component } from 'react';
//import ConditionalSection from './sections/conditional'


class App extends Component {
  render() {
    const numbers = [1,1,3,4,5]
    return (
      <div className= "App">
       {numbers.map ((number, index)=> {
         return <p key={index}> soy el {number}</p>
       })}
      </div>
    )
  }
}
export default App;
