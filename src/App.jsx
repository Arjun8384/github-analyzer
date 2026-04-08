import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("home"); // home | battle

  return (
    <>
      <Navbar setMode={setMode} mode={mode} />

      {mode === "home" ? <Home /> : <Battle />}
    </>
  );
}

export default App;