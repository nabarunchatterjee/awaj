import { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EventTimeline from "./Events";
import Slogan from "./Slogan";

export default function OptionTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ fontWeight: "bold" }}
          >
            <Tab
              label="Slogans"
              value="1"
              sx={{
                fontWeight: "bold",
                color: "gray",
                fontSize: "1rem",
                width: "50vw",
              }}
            />
            <Tab
              label="Event Timeline"
              value="2"
              sx={{
                width: "50vw",
                fontWeight: "bold",
                color: "gray",
                fontSize: "1rem",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 1, pr: 0 }}>
          <Slogan />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <EventTimeline />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
