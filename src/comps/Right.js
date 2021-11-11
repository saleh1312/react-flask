import React , {useState} from "react";
import axios from 'axios'

function Right(props) {
    const {image,setimage,realimg} = props


    function handleclick(event){
      axios.post("http://127.0.0.1:5000/get_image", {
        img: realimg,
      })
      .then(function (res) {
        setimage(res.data["img"])
      })
      .catch(function (error) {
        console.log(error);
      });
    }


  return (
    <div className="right">
      <img src={image} width="600" height="600"/>
      <button onClick={handleclick}>Convert</button>
    </div>
  );
}

export default Right;
