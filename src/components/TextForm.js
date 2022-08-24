import React, {useState} from 'react'




export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to UpperCase","success");
    }

    const handleLoClick=()=>{
      console.log("LowerCase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Coverted to LowerCase","success");
  }

  const handleClearText=()=>{
    setText('')
    props.showAlert("Text is clear","success");

    
}



const handleExtrSpaces = ()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "))
}



  
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

   

    


    const [text ,setText] = useState('');
  return (
    <>
    <div className='container'>
       
      <div className="mb-3">
         <h1>{props.heading}  </h1>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>

       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
      
       <button className="btn btn-primary mx-2" onClick={handleExtrSpaces}>Remove Extra Spaces</button>
     
    </div>

    <className className="container mb-4">
      <h2>You text summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.003*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </className>
    </>
  )
}