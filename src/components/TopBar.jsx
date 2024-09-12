import { ReactComponent as Logo } from "../protest-announcement-svgrepo-com.svg";
import Contact from "./ContactUs";
export default function TopBar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "8px",
        fontSize: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "row",
          color: "white",
        }}
      >
        <Logo
          fill="gray"
          style={{ width: "40px", height: "40px", marginRight: "4px" }}
        />
        আওয়াজ
      </div>
      <Contact />
    </header>
  );
}
