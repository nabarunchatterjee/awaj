import { useState, useEffect } from "react";
import { timeDifference } from "../helpers";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function WaitTime() {
  const [waitingTime, setWaitingTime] = useState();
  useEffect(() => {
    setWaitingTime(timeDifference());
    const intervalId = setInterval(() => {
      setWaitingTime(timeDifference());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="space-evenly"
      sx={{
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
        marginY: "4px",
        p: "4px",
      }}
    >
      <Typography color="cornflowerblue" sx={{ fontWeight: "bold" }}>
        Justice delayed is justice denied
      </Typography>
      <Typography variant="h6" color="#ee4b2b">
        {waitingTime}
      </Typography>
    </Stack>
  );
}
