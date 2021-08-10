import Introeffect from "./Introeffect.js";
import React, { useState } from "react";
import Epochtime from "./Epochtime.js";
import cvPDF from './IvanTinoco_CV_03082021.pdf';
import Socialmedia from "./Socialmedia.js";

function App() {
  const [visibility, setVisibility] = useState(false);

  const topShow = () => {
    return (
      <div class="box header">
        <div class="top titleA" onClick={middleShow}> who am I </div>
        <div class="top titleB" onClick={projectShow}> projects </div>
        <div class="top titleC" ><a href={cvPDF} download="IvanTinoco_CV.pdf" > curriculum vitae</a></div>
      </div>
    );
  };
  const middleShow = (e) => {
    const middleBox = document.getElementById("middleBox");
    middleBox.innerHTML = `
       <div class="aboutme">
     <h5> I have been a filmmaker, storyteller and video editor for 15 years. After falling in love with coding, I am now moving to web development to help realise company ideas in efficient, interactive and entertaining ways, making use of my problem solving skills and creativity. <br /> <br />I bring to the web development table my passion for teamwork and innovation. After completing a Front-End Web Development Bootcamp, I am keen to join a company where I can apply all this knowledge and continue that foster a growing culture. Creative Thinker. <br /><br />Problem Solver. Game Master. Filmmaker. Writer. </h5> </div>  `;
  };
  const projectShow = (e) => {
    const middleBox = document.getElementById("middleBox");
    middleBox.innerHTML = `
       <div class="projects">

       <a href="https://notevenagoat.github.io/cyberpunktools/"> CyberpunkRED tools </a> <br /><br />
       <a href="https://notevenagoat.github.io/incomecalc/"> Australian Jobseeker income calculator </a>
      </div>  `;
  };
  const targetDisplayNone = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div class="container">
      {visibility && topShow()}
      <div id="middleBox" class="box main" onClick={targetDisplayNone}>
        {!visibility && (<Introeffect setVisibility={setVisibility} visibility={visibility} />) }
      </div>
      {visibility && <Socialmedia> </Socialmedia>}
      <div class="box footer" onClick={() => window.location.reload()}>
        <Epochtime />
      </div>
    </div>
  );
}

export default App;
