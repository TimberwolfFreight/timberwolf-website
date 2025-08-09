import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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
        fontFamily: "Montserrat, sans-serif",
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
          Contact Us
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
          "Reach out to us for any questions, quotes, or partnership
          opportunities. We're here to help and look forward to connecting with
          you!"
        </Typography>
        <Box
          component="form"
          sx={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 4,
            boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
            p: { xs: 3, md: 5 },
            mb: 4,
            width: { xs: "90%", md: "420px" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mx: "auto",
          }}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              marginBottom: "12px",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              background: "#111",
              color: "#fff",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              marginBottom: "12px",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              background: "#111",
              color: "#fff",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              marginBottom: "12px",
              fontSize: "1.1rem",
              fontFamily: "Montserrat, sans-serif",
              resize: "vertical",
              background: "#111",
              color: "#fff",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#222",
              color: "#fff",
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              border: "none",
              borderRadius: "6px",
              padding: "12px 0",
              fontSize: "1.2rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
              marginTop: "8px",
              transition: "background 0.2s",
            }}
          >
            Send Message
          </button>
        </Box>
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
          Connect with us:
        </Typography>
        <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mb: 2 }}>
          {/* Social media links with actual icons, URLs to be added */}
          <a
            href="#"
            style={{ color: "#fff", fontSize: "2.2rem" }}
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            style={{ color: "#fff", fontSize: "2.2rem" }}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            style={{ color: "#fff", fontSize: "2.2rem" }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </Box>
        <Divider sx={{ bgcolor: "#222", mt: 3, mb: 0 }} />
      </Box>
    </section>
  );
}

export default Contact;
