import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Capabilities() {
  return (
    <section
      id="capabilities"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, #23243a 0%, #2c2d3f 100%)",
        minHeight: 480,
        paddingTop: "6vw",
        paddingBottom: "6vw",
        animation: "fadeIn 1.2s 0.2s ease",
        fontFamily: "Bangers, Comic Sans MS, cursive",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 2,
            fontFamily: "Bangers, Comic Sans MS, cursive",
            fontSize: { xs: "2rem", md: "2.8rem" },
            wordBreak: "break-word",
          }}
        >
          Capabilities Statement
        </Typography>
        <iframe
          src="/capabilties.pdf"
          title="Capabilities Statement"
          width="100%"
          height="600px"
          style={{
            border: "2px solid #222",
            borderRadius: 8,
            marginBottom: 24,
          }}
        />
        <a
          href="/capabilties.pdf"
          download
          style={{
            color: "#fff",
            background: "#222",
            padding: "0.8rem 2rem",
            borderRadius: 4,
            fontWeight: 700,
            fontFamily: "Bangers, Comic Sans MS, cursive",
            textDecoration: "none",
            fontSize: "1.2rem",
            marginTop: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            display: "inline-block",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#444";
            e.currentTarget.style.boxShadow = "0 0 0 2px #fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#222";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
          }}
        >
          Download Capabilities Statement
        </a>
      </Box>
    </section>
  );
}

export default Capabilities;
