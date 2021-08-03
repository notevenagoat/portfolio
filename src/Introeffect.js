import React, { useState } from "react";

export function Introeffect(props) {

  const { setVisible, visible} = props;
  const handleClicked = () => {
     setVisible(!visible);

  }

  return (
    <div>
       <div id="intro-effect-box" class="intro-effect" onClick={handleClicked}>
        <p> notevenagoat / portfolio </p>
      </div>
    </div>
  );
}

export default Introeffect;
