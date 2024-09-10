export default function RandomSlogan({ slogan, handleClick }) {
  return (
    <div className="Main">
      <div className="Slogan">{slogan}</div>
      <button className="Next button" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}
