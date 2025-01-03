import React from "react";

function ShowButtton({ showBtnFunction }) {

  return (
    <div>
      <button onClick={showBtnFunction}>click Me</button>
    </div>
  );
}

export default ShowButtton;
