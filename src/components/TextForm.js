import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Click","success");
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        console.log(text.split(" ").length); 
        setText(event.target.value);
    }
    const clearBtn = () =>{
        let newText = "";
        setText(newText);
    }
    const handleinverseclick = () => {
        // console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
      }

      const copyText = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      }

    const [text, setText] = useState("");
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    // const wordCount = text.split(" ").length-1;
    // setText("New Text");
    return (
        <>
        <div className="container">
            <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>{props.heading}</h2>
            <div className="mb-3 mt-4">
                <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "light" : "dark",color: props.mode === "dark" ? "light" : "dark"}} id="myBox" rows="8" onChange={handleOnChange} value={text} placeholder="Enter Something Here..."></textarea>
            </div>
            <button className="btn btn-primary mt-5" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mt-5 mx-2" onClick={clearBtn}>CLear</button>
            <button className="btn btn-primary mt-5 mx-2" onClick={handleinverseclick}>Inverse Text</button>
            <button className="btn btn-primary mt-5 mx-2" onClick={copyText}>Copy To Clipboard</button>
        </div>
        <div className="container my-4">
            <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Your Text Summery</h3>
            <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>{wordCount} {wordCount === 1 ? 'Word' : 'Words'} & {text.length} Characters</p>
            {/* <p>{0.008 * text.split(" ").length} Minutes to Read</p> */}
            <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Preview</h3>
            <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>{text.length>0?text:"Enter Something to preview" }</p>
        </div>
        </>
    )
}



TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading: 'Set Text Here',
  };