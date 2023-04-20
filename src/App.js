
import React from 'react';
import './App.css';
import Weather from "./Weather";
function App() {
  return (<div className='App'>
<div className='container'>
  <Weather defaultCity = "London"/>
  <footer> This project was created by Kristina Vujnovac and is open-sourced on {""}
    <a href="https://github.com/KrisQ625/weather-app-react" target="_blank" rel=" noopener noreferrer"> GitHub 🖥️</a>
  </footer>
  </div>
  </div>
 
  );
}

export default App;
