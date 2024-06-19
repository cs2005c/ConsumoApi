import { useState } from "react";
import Landing from "./Components/Landing";
import Card from "./Components/Card";
import MiApi from "./Components/MiApi";

function App() {
  return (
    <>
      <Landing />
      <MiApi />
      {/*   <Card /> */}

      <div className="tarjetas"></div>
    </>
  );
}

export default App;
