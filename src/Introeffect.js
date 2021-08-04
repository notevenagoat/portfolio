import React, { useState } from "react";

export function Introeffect(props) {

  const { visibility, setVisibility} = props;
  const handleClicked = () => {
     setVisibility(!visibility);

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
