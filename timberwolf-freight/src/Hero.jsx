import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import HomeVideo from "./assets/IMG_7382.MOV";
import ServicesImage from "./assets/brainerdwatertower.jpg";
import TestimonialsImage from "./assets/IMG_5309.jpeg";
import TrustImage from "./assets/trust.jpg";

function Hero({ children }) {
  const location = useLocation();
  return (
    <>
      <Box
        id="hero"
        sx={{
          position: "relative",
          minHeight: { xs: "380px", md: "70vh" },
          height: { xs: "50vh", md: "70vh" },
          width: "100vw",
          maxWidth: "100vw",
          left: "50%",
          right: "50%",
          transform: "translate(-50%, 0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          background: "#0a0a0a",
          borderRadius: 0,
          overflow: "hidden",
          marginBottom: 0,
          animation: "fadeIn 1.2s ease",
        }}
      >
        {location.pathname === "/services" ? (
          <img
            src={ServicesImage}
            alt="Services Hero Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
              zIndex: 1,
              opacity: 0.45,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
        ) : location.pathname === "/testimonials" ? (
          <img
            src={TestimonialsImage}
            alt="Testimonials Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              opacity: 0.45,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ) : location.pathname === "/contact" ? (
          <img
            src={TrustImage}
            alt="Trust"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              opacity: 0.45,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ) : (
          <video
            src={HomeVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              opacity: 0.45,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        )}
        {/* Hero overlay text for all pages, inside hero */}
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            zIndex: 3,
            position: "absolute",
            top: 25,
            left: 0,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 1,
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: 2,
              textShadow: "0 2px 16px rgba(0,0,0,0.38)",
            }}
          >
            Timberwolf Freight
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "2.6rem", md: "4rem" },
              mt: 16,
              mb: 2,
              fontFamily: "Montserrat, sans-serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.28)",
            }}
          >
            {location.pathname === "/services"
              ? "Smart Lean Relentless"
              : location.pathname === "/testimonials"
              ? "People First Approach"
              : location.pathname === "/contact"
              ? "Let's Connect"
              : "Freight Solutions You Can Trust"}
          </Typography>
        </Box>
      </Box>
      {/* Children for page content below hero and overlay text */}
      <Box
        sx={{
          width: "100%",
          zIndex: 2,
          position: "relative",
              fontFamily: "Montserrat, sans-serif",
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default Hero;
