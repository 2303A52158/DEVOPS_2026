import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹60,000",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
];

function Products() {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Products
      </h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.image} alt={p.name} style={styles.image} />

            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <Link to={`/products/${p.id}`} style={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "15px",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 18px",
    backgroundColor: "#2874f0", // Flipkart blue
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default Products;
