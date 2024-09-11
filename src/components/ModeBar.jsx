export default function ModeBar({ mode, handleClick }) {
  return (
    <header className="ModeBox">
      <ModeButton mode={mode} text="All" handleClick={handleClick} />
      <ModeButton mode={mode} text="Random" handleClick={handleClick} />
    </header>
  );
}

function ModeButton({ mode, text, handleClick }) {
  const isCurrentMode = mode === text.toLowerCase();
  return (
    <button
      className="Mode"
      onClick={() => handleClick(text.toLowerCase())}
      style={{
        fontWeight: isCurrentMode ? "bold" : "inherit",
        color: isCurrentMode ? "white" : "gray",
        borderBottom: isCurrentMode ? "2px solid white" : "transparent",
        flex: 1,
        cursor: "pointer",
        // padding: "1.5rem",
        textAlign: "center",
        fontSize: "1.5rem",
      }}
    >
      {text}
    </button>
  );
}
