import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("");
   const handleUpClick = ()=>{
       console.log("UpperCase");
       let new_text = text.toUpperCase();
       setText(new_text)
       props.showAlert(' : Converted to UpperCase','success')
   }
   const handleloClick = ()=>{
       console.log("UpperCase");
       let new_text = text.toLowerCase();
       setText(new_text)
       props.showAlert(' : Converted to LowerCase','success')
   }
   const handleSpeak = ()=>{
       console.log("UpperCase");
       let msg = new SpeechSynthesisUtterance();
       msg.text = text;
       window.speechSynthesis.speak(msg);
    //    setText(new_text)
   }
   const handleCapitalize = ()=>{
    console.log("UpperCase");
    let temp = text.split(" ");
    let new_text = "";
    for (let i = 0; i < temp.length; i++) {
        new_text+=temp[i].charAt(0).toUpperCase() + temp[i].slice(1)+" ";
    }
  
    setText(new_text)
   }
   const handleCopy = ()=>{
        // var text = document.getElementById('mybox');
        // text.select();
        navigator.clipboard.writeText(text);
    }
   const handleOnChange = (event)=>{
       console.log("UpperCase");
       setText(event.target.value);
   }
   const handleExtraSpace = (event)=>{
      let new_text = text.split(/[ ]+/);
      setText(new_text.join(" "));
   }
  return (
      <>
        <div className='container' style={{color:props.mode ==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white' , color :props.mode ==='dark'?'white':'black'} } id="mybox"  rows="10" placeholder='Enter Text Here'></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LOwerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container"  style={{color:props.mode ==='dark'?'white':'black'}}>
            <h1 className='mt-5'>Your text Summary</h1>
            <p>Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  Characters : {text.length}</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} : Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </>
  )
}
