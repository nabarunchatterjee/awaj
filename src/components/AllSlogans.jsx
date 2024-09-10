export default function AllSlogans({ sloganList }) {
  return sloganList.map((item, key) => (
    <div
      key={key}
      style={{ fontSize: "2rem", margin: "8px", marginTop: "16px" }}
    >
      {item}
      <hr style={{ marginRight: "38px", marginLeft: "38px" }} />
    </div>
  ));
}
