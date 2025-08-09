import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        background: "#181828",
        color: "#fff",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.375rem",
        letterSpacing: 1,
        textAlign: "center",
        padding: "1.5rem 0 0.75rem 0",
        marginTop: 0,
        borderTop: "2px solid #23243a",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.2rem",
            fontSize: "1.35rem",
            fontWeight: 500,
            padding: 0,
            margin: 0,
            width: "100%",
            maxWidth: "100vw",
            boxSizing: "border-box",
          }}
        >
          <li>
            <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #23243a",
          margin: "2rem 0 1.5rem 0",
        }}
      />
      <div
        style={{ marginTop: "1.5rem", fontSize: "1.1875rem", color: "#bdbdbd" }}
      >
        &copy; {new Date().getFullYear()} Timberwolf Freight LLC. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
