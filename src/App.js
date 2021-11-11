import React , {useState} from "react";
import {img1 ,img2} from "./data";
import Left from "./comps/Left";
import Right from "./comps/Right";



function App() {
  const [defaultimg, setdefaultimg] = useState(img1);
  const [defaultimg2, setdefaultimg2] = useState(img2);
  return (
    <div className="App">
      <Left image={defaultimg} setimage={setdefaultimg}/>
      <Right image={defaultimg2} setimage={setdefaultimg2} realimg={defaultimg}/>
    </div>
  );
}

export default App;
