import { useState } from "react"

function Form(){
    let[text,setText]=useState("");
    return(
        <>

      <input type="text" placeholder="enter name" 
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <button>submit</button>   
      <h1>{text}</h1>     
        </>
    )
}

export default Form;