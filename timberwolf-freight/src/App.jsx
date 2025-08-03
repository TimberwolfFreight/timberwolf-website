import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TrustImg from "./assets/trust.jpg"; // Uncomment and use your image

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Condensed, Arial, sans-serif",
    h1: { fontFamily: "Playfair Display, serif" },
    h2: { fontFamily: "Playfair Display, serif" },
    h4: { fontFamily: "Playfair Display, serif" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="site-wrapper"
        sx={{ background: "#0a0a0a", minHeight: "100vh", width: "100vw" }}
      >
        <header
          id="site-header"
          style={{ width: "100%", padding: 0, margin: 0 }}
        />
        <main
          id="main-content"
          style={{ width: "100%", margin: 0, padding: 0 }}
        >
          <section
            id="hero"
            style={{
              position: "relative",
              minHeight: "600px",
              height: "60vh",
              width: "100vw",
              maxWidth: "100vw",
              left: "50%",
              right: "50%",
              transform: "translate(-50%, 0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0a0a0a",
              borderRadius: 0,
              overflow: "hidden",
              marginBottom: "0",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100%",
                backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.12) 60%, rgba(10,10,10,0.5) 100%), url(${TrustImg})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                opacity: 0.38,
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "100%",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "2vw",
                paddingRight: "2vw",
              }}
            >
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontSize: { xs: "2.8rem", sm: "3.6rem", md: "4.2rem" },
                    opacity: 0.97,
                    mb: 6,
                    mt: "60px",
                  }}
                >
                  Timberwolf Freight
                </Typography>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "Arial, Helvetica, Open Sans, sans-serif",
                    fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4.2rem" },
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    letterSpacing: 1,
                    mb: 3,
                    mt: { xs: 8, sm: 12, md: 16 },
                  }}
                >
                  Freight Solutions You Can Trust
                </Typography>
              </div>
            </div>
          </section>

          <section
            id="about"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#111",
              minHeight: 480,
              paddingTop: "6vw",
              paddingBottom: "6vw",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
                color: "#bdbdbd",
                textAlign: "center",
                mb: 2,
                mt: 0,
              }}
            >
              About Timberwolf Freight
            </Typography>
            <Divider sx={{ width: 120, bgcolor: "#444", mb: 4 }} />

            <Box
              sx={{
                maxWidth: 1000,
                px: { xs: 3, sm: 4, md: 6 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#bdbdbd",
                  fontSize: { xs: "1.2rem", sm: "1.3rem" },
                  mb: 3,
                  fontFamily: "Roboto Condensed, Arial, sans-serif",
                  lineHeight: 1.7,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                "Timberwolf Freight is a family-owned freight transportation
                company based out of Minnesota. My wife and I built this
                business on three simple principles: being smart with our
                approach, lean in our operations, and relentless in our pursuit
                of excellence. We understand that your freight isn't just cargo,
                it's your livelihood, and we treat it that way. Whether you need
                full truckload, LTL, or specialized freight services, we're here
                to get your goods where they need to go, on time and intact,
                with the personal touch that only comes from a family business
                that truly cares about your success."
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  fontWeight: 600,
                  fontFamily: "Roboto Condensed, Arial, sans-serif",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                — Jason Ostergren, Owner - Principal Broker
              </Typography>
            </Box>
          </section>

          <section
            id="contact"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#0a0a0a",
              minHeight: 480,
              paddingTop: "6vw",
              paddingBottom: "6vw",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
                color: "#bdbdbd",
                textAlign: "center",
                mb: 2,
                mt: 0,
              }}
            >
              Contact Us
            </Typography>
            <Divider sx={{ width: 120, bgcolor: "#444", mb: 3 }} />
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 400,
                fontSize: "1.4rem",
                mb: 4,
                textAlign: "center",
                fontFamily: "Roboto Condensed, Arial, sans-serif",
              }}
            >
              Drop us a line!
            </Typography>
            <Box
              component="form"
              sx={{
                width: "100%",
                maxWidth: 600,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#bdbdbd" } }}
                sx={{
                  input: { color: "#fff", bgcolor: "#0a0a0a" },
                  label: { color: "#bdbdbd" },
                  fieldset: { borderColor: "#bdbdbd" },
                }}
              />
              <TextField
                label="Email*"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#bdbdbd" } }}
                sx={{
                  input: { color: "#fff", bgcolor: "#0a0a0a" },
                  label: { color: "#bdbdbd" },
                  fieldset: { borderColor: "#bdbdbd" },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                InputLabelProps={{ style: { color: "#bdbdbd" } }}
                sx={{
                  textarea: { color: "#fff", bgcolor: "#0a0a0a" },
                  label: { color: "#bdbdbd" },
                  fieldset: { borderColor: "#bdbdbd" },
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <input
                  type="checkbox"
                  id="signup"
                  style={{
                    marginRight: 8,
                    accentColor: "#bdbdbd",
                    width: 22,
                    height: 22,
                  }}
                />
                <label
                  htmlFor="signup"
                  style={{
                    color: "#bdbdbd",
                    fontFamily: "Roboto Condensed, Arial, sans-serif",
                    fontSize: "1.1rem",
                  }}
                >
                  Sign up for our email list for updates, promotions, and more.
                </label>
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#fff",
                  color: "#222",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: 2,
                  borderRadius: 2,
                  mt: 3,
                  py: 1.2,
                  px: 0,
                  width: 120,
                  alignSelf: "center",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#e6e6e6", color: "#222" },
                }}
              >
                SEND
              </Button>
            </Box>
          </section>
        </main>
        <footer
          id="site-footer"
          style={{
            width: "100%",
            textAlign: "center",
            color: "#bdbdbd",
            fontFamily: "Roboto Condensed, Arial, sans-serif",
            fontSize: "1rem",
            padding: "2rem 0 1rem 0",
            background: "#0a0a0a",
          }}
        >
          <Divider sx={{ bgcolor: "#222", mb: 2 }} />
          <div>
            Copyright © {new Date().getFullYear()} Timberwolf Freight - All
            Rights Reserved.
          </div>
        </footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
