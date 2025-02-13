// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes,Link  } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  // setInterval(() =>{
  //   document.title = "Amazing React App";
  // },2000);
  // setInterval(() =>{
  //   document.title = "Download React App Now";
  // },1500);


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      showAlert("Dark mode enabled", "success");
      document.title = "Dark Mode | React App";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode enabled", "success");
      document.title = "Light Mode | React App";
    }
  }
  return (
    <>
    <Router> 
      <Navbar title="Website" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

        <div className="container col-md-6 mt-5 mx-auto">
        <TextForm showAlert={showAlert} heading="Count Your Words" mode={mode} />
            <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Count Your Words" mode={mode} />} />
              <Route exact path="/about" element={<About/>} />
                
            </Routes> 
        </div>
       </Router> 
    </>
  );
}

export default App;
