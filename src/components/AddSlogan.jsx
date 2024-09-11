export default function AddSlogan({ handleClick }) {
  return (
    <button
      style={{
        background: "transparent",
        color: "white",
        borderRadius: "5px",
        padding: "8px 18px",
        fontSize: "1.2rem",
      }}
      onClick={handleClick}
    >
      &#43; Add Slogan
    </button>
  );
}
