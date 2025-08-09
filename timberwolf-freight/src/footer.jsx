import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        background: "#181828",
        color: "#fff",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.375rem", // 25% larger
        letterSpacing: 1,
        textAlign: "center",
        padding: "1.5rem 0 0.75rem 0", // 25% larger
        marginTop: "0",
        borderTop: "2px solid #23243a",
        position: "relative",
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3.125rem", // 25% larger
            margin: 0,
            padding: 0,
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
              to="/testimonials"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Testimonials
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
        </ul>
      </nav>
      <div
        style={{ marginTop: "1.5rem", fontSize: "1.1875rem", color: "#bdbdbd" }}
      >
        &copy; {new Date().getFullYear()} Timberwolf Freight. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
