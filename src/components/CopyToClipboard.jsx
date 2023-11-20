import React from 'react'

export default function CopyToClipboard(props) {
     // function of copying the password to clipboard
  const Copy = () => {
    // creating a blank constant
    const textArea = document.createElement('textarea');
    // saving the password in it
    textArea.value = props.content;
    // appending the textArea inside DOM structure, so as it can be used, otherwise it would'nt
    document.body.appendChild(textArea);
    // selecting the content from textArea
    textArea.select();
    // this command will copy all the content from textArea, also, it is context specifix, so will not copy entire content from website
    document.execCommand('copy');
    // after the work is done, it is removed from the DOM as it does not sit there empty
    document.body.removeChild(textArea);
  };
  return(
    <button type="button" className="btn btn-danger mx-1" onClick={Copy}>copy</button>
  )
}
