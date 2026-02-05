import { useParams } from "react-router-dom";

const productData = {
  1: {
    name: "Laptop",
    price: "₹60,000",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  2: {
    name: "Mobile Phone",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  3: {
    name: "Headphones",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
};

function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
}

const styles = {
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#ff9f00", // Amazon/Flipkart style
    border: "none",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProductDetail;
