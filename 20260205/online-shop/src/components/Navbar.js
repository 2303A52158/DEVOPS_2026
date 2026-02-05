import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🛍️ OnlineShop</div>

      <div style={styles.links}>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <Link style={styles.link} to="/products">
          Products
        </Link>
        <Link style={styles.link} to="/cart">
          Cart
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
};

export default Navbar;
