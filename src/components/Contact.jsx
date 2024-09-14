import { useState } from "react";
import ContactDialog from "./ContactUs";
import Button from "@mui/material/Button";

export default function ContactButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        style={{
          background: "transparent",
          color: "white",
          borderRadius: "5px",
          padding: "8px 18px",
          fontSize: "1.2rem",
        }}
        onClick={() => setOpen(true)}
      >
        Contact Us
      </Button>
      <ContactDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
