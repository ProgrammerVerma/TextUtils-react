import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    
    const toUp = ()=> {
    let newText = text.toUpperCase();
    setText(newText)
    }

    const toLow = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
    }

    const erase = ()=> {
    setText("")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }

    const Copy = () => {
      // creating a blank constant
      const textArea = document.createElement('textarea');
      // saving the password in it
      textArea.value = text;
      // appending the textArea inside DOM structure, so as it can be used, otherwise it would'nt
      document.body.appendChild(textArea);
      // selecting the content from textArea
      textArea.select();
      // this command will copy all the content from textArea, also, it is context specifix, so will not copy entire content from website
      document.execCommand('copy');
      // after the work is done, it is removed from the DOM as it does not sit there empty
      document.body.removeChild(textArea);

      props.showAlert("copied to clipBoard", "success")
    }

  return (
    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
    <h2>{props.heading}</h2>
    <form>
  <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='enter your text here'></textarea>
  </div></form>
  <div className="mb-3">
  <button type="button" className="btn btn-primary mx-1 mb-3" onClick={toUp}>to upperCase</button>
  <button type="button" className="btn btn-primary mx-1 mb-3" onClick={toLow}>to lowerCase</button> <br />
  <button type="button" className="btn btn-danger mx-1" onClick={erase}>erase</button>
  <button type="button" className="btn btn-success mx-1" onClick={Copy}>copy</button>
  </div>
  
  <h3>your text summary</h3>
  <p>{(text.split(" ").length)-1} words <br />{text.length} characters <br />{0.008* ((text.split(" ").length)-1)} minutes read</p>

  <h3>preview</h3>
  <p>{text}</p>
    </div>
  )
}