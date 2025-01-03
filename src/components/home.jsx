import React, { useEffect, useState, useRef } from "react";
import ShowButtton from "./ShowButtton";

function Home() {
  const [label, setLabel] = useState("Home");
 



  return (
    <>
      <div>Welcome to My {label}</div>
    

    </>
  );
}

export default Home;
