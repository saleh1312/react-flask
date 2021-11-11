import React , {useState} from "react";

function Left(props) {
  const {image,setimage} = props

  function handlechange(event){
    const file=event.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload=()=>{
        setimage(fr.result)
    };

  }
  return (
    <div className="left">
      <img src={image} width="600" height="600"/>
      <input type="file" onChange={handlechange}/>

    </div>
  );
}

export default Left;
