import Introeffect from "./Introeffect.js";
import React, { useState } from 'react';


function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div class="container">
      <div class="box header">
      {visible ?<div class="top titleA" > who am I </div>:""}
      {visible ?<div class="top titleB" > projects </div>:""}
      {visible ?<div class="top titleC" > curriculum vitae </div>:""}
       </div>
    
      <div class="box main">
      {!visible ?<Introeffect setVisible={setVisible} visible={visible}/>:""}
 
      </div>
      <div class="box footer">
      <p> contact </p>
      </div>
    
    </div>
  );
}

export default App;
