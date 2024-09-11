import "./App.css";
import { useState, useEffect } from "react";
import slogans from "./slogans";
import { slogIndex } from "./helpers";
import AllSlogans from "./components/AllSlogans";
import RandomSlogan from "./components/RandomSlogan";
import ModeBar from "./components/ModeBar";
import WaitTime from "./components/WaitTime";
import AddSlogan from "./components/AddSlogan";
import AddSloganDialog from "./components/AddSloganDialog";
import TopBar from "./components/TopBar";

function App() {
  const [sloganIndex, setSloganIndex] = useState(0);
  const [mode, setMode] = useState("random");
  const [open, setOpen] = useState(false);

  const handleSloganChange = () => {
    setSloganIndex(slogIndex(0, slogans.length - 1));
  };

  useEffect(() => handleSloganChange(), []);

  return (
    <div className="App">
      <TopBar addSlogan={<AddSlogan handleClick={() => setOpen(true)} />} />
      <ModeBar mode={mode} handleClick={setMode} />
      <WaitTime />
      {mode === "random" ? (
        <RandomSlogan
          slogan={slogans[sloganIndex]}
          handleClick={handleSloganChange}
        />
      ) : (
        <AllSlogans sloganList={slogans} />
      )}
      <AddSloganDialog open={open} handleClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
