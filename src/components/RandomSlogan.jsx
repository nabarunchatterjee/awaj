export default function RandomSlogan({ slogan, handleClick }) {
  return (
    <div className="Main">
      <Slogan text={slogan} />
      <button className="Next button" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}

function Slogan({ text }) {
  const [lead, chorus] = text.split(",");

  return (
    <div style={{ minHeight: "60vh" }} className="Slogan">
      <div>{lead}</div>
      <div style={{ color: "#ee4b2b" }}>{chorus}</div>
    </div>
  );
}
