import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Services() {
  return (
    <section
      id="services"
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
          Services
        </Typography>
        <Divider sx={{ bgcolor: "#222", mb: 3 }} />
        <div style={{ maxWidth: 900, margin: "0 auto 2rem auto" }}>
          <ul
            style={{
              color: "#bdbdbd",
              fontSize: "1.4rem", // Match About page quote size
              fontFamily: "Bangers, Comic Sans MS, cursive",
              textAlign: "left",
              paddingLeft: "1.5em",
              lineHeight: 1.6,
              display: "inline-block",
              width: "100%",
            }}
          >
            <li>Full Truckload (FTL) and Less Than Truckload (LTL) solutions</li>
            <li>Specialized freight for oversized, fragile, or high-value shipments</li>
            <li>Nationwide coverage and real-time tracking</li>
            <li>Custom logistics planning and dedicated customer support</li>
            <li>Compliance with all industry standards and regulations</li>
            <li>Expedited shipping and time-critical deliveries</li>
            <li>Temperature-controlled and refrigerated transport</li>
            <li>Real-time quoting and load scheduling</li>
            <li>Flexible solutions for seasonal and project-based freight</li>
          </ul>
        </div>
        <Divider sx={{ bgcolor: "#222", mb: 3, mt: 4 }} />
        <div style={{ height: "3em" }} />
      </Box>
    </section>
  );
}

export default Services;
