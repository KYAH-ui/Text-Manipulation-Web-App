import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name = "John";
function App() {
  
  const [mode,setMode] = useState('Light');
  const toggleMode = () =>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      document.title = "dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.title = "light  mode"; 
    }
  }

  return (
    <>
    <Router>
    <Navbar mode = {mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Switch>
    <Route exact path="/">
      <Textform heading = "Text Area" mode={mode}/> 
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
     </Switch> 
    </div>
     {/* <Navbar title = "Home" aboutText = "Contact"/> */}
    </Router>
    
    </>
  );
}

export default App;
