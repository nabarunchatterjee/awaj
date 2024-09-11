export default function AddSloganDialog({ open, handleClose }) {
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
        Add Slogan{" "}
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
            Send an email{" "}
            <a href="mailto:nabarun.chatterjeee@gmail.com?subject=New Slogan(s) for Awaj">
              here
            </a>{" "}
            or,
          </li>
          <li>
            Raise a pull request in the{" "}
            <a href="https://github.com/nabarunchatterjee/awaj"> Awaj repo</a>
          </li>
        </ul>
      </div>
      <hr />
      <div
        style={{
          color: "gray",
          fontSize: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContents: "start",
          textAlign: "left",
        }}
      >
        For any other communication/feedback
        <ul>
          <li>
            Send an email{" "}
            <a
              href="mailto:nabarun.chatterjeee@gmail.com?subject=
              Communication regarding Awaj"
            >
              here
            </a>{" "}
            or,
          </li>
          <li>
            Raise an issue in the{" "}
            <a href="https://github.com/nabarunchatterjee/awaj/issues">
              Awaj repo issue tracker
            </a>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
