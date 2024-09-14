export default function ContactDialog({ open, handleClose }) {
  return (
    <dialog
      open={open}
      style={{
        position: "absolute",
        inset: 0,
        minWidth: "70vw",
        borderRadius: "10px",
        border: 0,
        background: "rgba(24,24,24,1)",
        zIndex: 999,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          borderBottom: "2px solid white",
          padding: "8px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        Contact{" "}
        <button
          style={{
            width: "50px",
            height: "40px",
            position: "relative",
            backgroundColor: "transparent",
            color: "white",
            opacity: "0.8",
            fontSize: "2.5rem",
            border: "none",
          }}
          onClick={handleClose}
        >
          &times;
        </button>
      </div>

      <div
        style={{
          color: "white",
          fontSize: "1.4rem",
          display: "flex",
          flexDirection: "column",
          justifyContents: "start",
          textAlign: "left",
        }}
      >
        <ul>
          <li>
            <a href="mailto:nabarun.chatterjeee@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/nabarunchatterjee/awaj">
              {" "}
              Awaj github repo
            </a>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
