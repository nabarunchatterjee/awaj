import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AllSlogans({ sloganList }) {
  return (
    <>
      <Typography sx={{ fontSize: "1.5rem", py: 1 }}>
        {" "}
        To add a new slogan send mail{" "}
        <a href="mailto: nabarun.chatterjee@gmail.com?subject=New Slogan for Awaj">
          here
        </a>{" "}
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            window.innerWidth > 600 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
          gap: "8px",
          padding: "8px",
        }}
      >
        {sloganList.map((item) => (
          <SloganCard key={item} item={item} />
        ))}
      </div>
    </>
  );
}

function SloganCard({ item }) {
  return (
    <Card
      sx={{
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiCardContent-root:last-child": {
          pb: 0,
        },
      }}
    >
      <CardContent sx={{ p: "4px" }}>{item}</CardContent>
    </Card>
  );
}
