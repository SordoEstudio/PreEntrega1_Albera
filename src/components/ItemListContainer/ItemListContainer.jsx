const ItemListContainer = ({ greeting }) => {
  const greetingStyles = {
    fontSize: "3rem",
    textAlign: "center",
    color: "#aaa",
  };
  return <div style={greetingStyles}>{greeting}</div>;
};
export default ItemListContainer;
