import Introeffect from "./Introeffect.js";
import React, { useState } from 'react';
import Epochtime from './Epochtime.js'

function App() {
  const [visible, setVisible] = useState(false);

  const topShow = () => {
         return (
        <div class="box header">
        <div class="top titleA" onClick={middleShow} > who am I </div>
        <div class="top titleB" > projects </div>
        <div class="top titleC" > curriculum vitae </div>
        </div>  
        );   
  }
  const middleShow = () => {
    document.getElementById("middleBox").innerHTML= `
       <div>
     <h5> I have been a filmmaker, storyteller and video editor for the last 15 years. I am moving to web development to embrace the digital work and help realise company ideas in efficient, interactive and entertaining ways, making use of my problem solving skills and creativity.

I bring to the web development table my passion for teamwork and innovation. After completing a Front-End Web Development Bootcamp, I am keen to join a company where I can apply all this knowledge and continue that foster a growing culture.

Creative Thinker. Problem Solver. Game Master. Filmmaker. Writer </h5>
   </div>  `
   ;
}
  return (
    <div class="container">
      
      {visible && topShow()}
       
    
      <div id="middleBox"class="box main">
      {!visible ?<Introeffect setVisible={setVisible} visible={visible}/> :""}
 
      </div>
      <div class="box footer" onClick={() => window.location.reload(false)}>
       <Epochtime /> 
      
      </div>
    
    </div>
  );
}

export default App;
