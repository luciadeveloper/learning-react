import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props) {
//  return <h2>{props.title}</h2>
//}

//const Hello = (props) => <h2>{props.title}</h2>

function Hello (props) { 
  return <h2>{props.title}</h2>
}

//const Hello2 = (props) =><h2>{props.title}</h2>

class Hello3 extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render(){
    const {
     
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props

    
    const mappedNumbs = arrayOfNumbers.map(multiply)
 
    return ( <div>
              <p>{mappedNumbs.join(', ')}</p>
              <p>{objectWithInfo.key}</p>
              {title}
            </div>
    )  
  }
}


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text 
          arrayOfNumbers={[2,4,10]}
          objectWithInfo = {{ key: 'first value', key2: 'otheValue'}}
          number={2} 
          boolean={true} 
          text="texto en string" 
          isActive 
          multiply = {(number) => number * 4}
          number = {2}
          title= {<h1>este es mio</h1>}
          />
         
       
      </div>
    </div>
  );
}

export default App;
