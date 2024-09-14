import { useState, useEffect } from "react";
import slogans from "../assets/slogans";
import { slogIndex } from "../helpers";
import AllSlogans from "./AllSlogans";
import RandomSlogan from "./RandomSlogan";
import ModeBar from "./ModeBar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Slogan() {
  const [sloganIndex, setSloganIndex] = useState(0);
  const [mode, setMode] = useState("random");
  const handleSloganChange = () => {
    setSloganIndex(slogIndex(0, slogans.length - 1));
  };
  useEffect(() => handleSloganChange(), []);
  return (
    <>
      <ModeBar mode={mode} handleClick={setMode} />
      {mode === "random" ? (
        <RandomSlogan
          slogan={slogans[sloganIndex]}
          handleClick={handleSloganChange}
        />
      ) : (
        <AllSlogans sloganList={slogans} />
      )}
    </>
  );
}
