import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';

function App() {
  // console.log("print app");
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    // document.getElementById('root')
  );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1> 2021 CoP fastMVP 메인페이지 입니다. </h1>
  //       {/* <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
  // );
}

export default App;
