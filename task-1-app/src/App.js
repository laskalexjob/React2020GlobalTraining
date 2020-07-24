import React, {Component, PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

class StrictComponent extends Component{
  render(){
    return <h1>Hello from Strict Comp</h1>
  }
}

class MyPureComponent extends PureComponent{
  render(){
    return <h1>Hello from Pure Component</h1>
  }
}

let LambdaFuncComp = ()=> <h1>Hello from lambda function Component</h1>

let FunctionalComp = function(){
  return <h1>Hello from Functional Component</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {React.createElement('div',null, "Hello from createElem method")}
        
        <StrictComponent/>
        <MyPureComponent/>
        <LambdaFuncComp/>
        <FunctionalComp/>

      </header>
    </div>
  );
}

export default App;
