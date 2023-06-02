
import React from 'react';
import './App.css';
import Weather from "./Weather";
function App() {
  return (<div className='App'>
<div className='container-sm'>
  <Weather defaultCity = "London"/>
  <footer> This project was created by Kristina Vujnovac and is open-sourced on {""}
    <a href="https://github.com/KrisQ625/weather-app-react" target="_blank" rel=" noopener noreferrer"> GitHub 🖥️</a> and hosted on <a href="https://darling-youtiao-4cbd58.netlify.app/"target="_blank" rel=" noopener noreferrer">Netlify</a>.
  </footer>
  </div>
  </div>
 
  );
}

export default App;
