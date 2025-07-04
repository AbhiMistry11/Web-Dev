import Product from "./Product";

function ProductTab() {
  let styles = {
    display:"flex",
    flexWrap:"wrap"
  };
  return (
    <>
      <div style={styles} >
        <Product title="Logitech MX Master" idx={0} />
        <Product title="Apple Pencil" idx={1} />
        <Product title="Zebronics Zeb-Transformer" idx={2} />
        <Product title="Petronics Tod One" idx={3} />
      </div>
    </>
  );
}

export default ProductTab;