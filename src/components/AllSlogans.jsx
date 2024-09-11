export default function AllSlogans({ sloganList }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          window.innerWidth > 600 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
        gap: "8px",
        padding: "8px",
      }}
    >
      {sloganList.map((item, key) => (
        <SloganCard key={key} item={item} />
      ))}
    </div>
  );
}

function SloganCard({ key, item }) {
  return (
    <div
      key={key}
      style={{
        fontSize: "2rem",
        borderRadius: "5px",
        verticalAlign: "center",
        boxShadow: "0px 1px 1px 1px rgba(255, 255, 255, 0.5)",
        display: "flex",
        alignItems: "center",
        padding: "4px",
      }}
    >
      {item}
    </div>
  );
}
