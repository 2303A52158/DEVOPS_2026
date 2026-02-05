function Cart() {
  // Sample cart items (mock data)
  const cartItems = [
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
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.image} alt={item.name} style={styles.image} />

          <div style={styles.details}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button style={styles.removeBtn}>Remove</button>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div style={styles.summary}>
        <h3>Total: ₹85,000</h3>
        <button style={styles.checkoutBtn}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
  },
  details: {
    flex: 1,
  },
  removeBtn: {
    padding: "6px 12px",
    backgroundColor: "#ff6161",
    border: "none",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
  summary: {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  checkoutBtn: {
    marginTop: "10px",
    padding: "12px 20px",
    backgroundColor: "#ff9f00", // Amazon-style
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Cart;
