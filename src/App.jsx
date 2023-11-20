import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/alert'
// import About from './components/About'
// import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= "#232D3F"
      showAlert("darkMode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white"
      showAlert("lightMode has been enabled", "success")
    }
  }
  return (
    <>
       {/* <Router> */}
    <Navbar title= "textUtils" mode= {mode} toggle= {toggleMode}/>
    <Alert alert= {alert}/>
    <div className='container'>
      {/* <Routes> */}
        {/* <Route path='/' element={<TextForm showAlert= {showAlert} heading= "Enter the text below to analyze" mode= {mode}/>}/> */}
        <TextForm showAlert= {showAlert} heading= "Enter the text below to analyze" mode= {mode}/>
        {/* <Route path='/about' element={<About/>}/> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    
    </>
  );
}

export default App



