export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919177615696"
      target="_blank"
      style={styles.button}
    >
      💬
    </a>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    textDecoration: "none",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
};
