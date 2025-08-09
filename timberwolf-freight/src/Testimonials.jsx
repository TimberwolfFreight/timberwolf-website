import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, #23243a 0%, #2c2d3f 100%)",
        padding: "6vw 5vw",
        animation: "fadeIn 1.2s 0.2s ease",
        fontFamily: "Montserrat, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 2,
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "2rem", md: "2.8rem" },
            wordBreak: "break-word",
          }}
        >
          Testimonials
        </Typography>
        <Divider sx={{ bgcolor: "#222", mb: 3 }} />
        <Typography
          variant="body1"
          sx={{
            color: "#bdbdbd",
            fontSize: { xs: "1.2rem", md: "1.4rem" },
            mb: 3,
            fontFamily: "Montserrat, sans-serif",
            fontStyle: "italic",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          "We're building something special. Our brokerage is focused on
          long-term relationships, reliability, and a people-first approach. We
          look forward to sharing real stories and testimonials from our valued
          partners soon."
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mt: 6,
            textAlign: "center",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            letterSpacing: 1,
            fontFamily: "Montserrat, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &mdash; The Timberwolf Freight Team
        </Typography>
        <Divider sx={{ bgcolor: "#222", mt: 3, mb: 0 }} />
      </Box>
    </section>
  );
}

export default Testimonials;
