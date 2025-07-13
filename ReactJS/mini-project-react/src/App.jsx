import "./App.css";
import NewProduct from "./NewProduct";

import Products from "./Product";

function App() {
  const products = [
    { id: 1, name: "Nirma", amount: 100, date: new Date(2023, 10, 1) },
    { id: 2, name: "Tata", amount: 200, date: new Date(2023, 10, 2) },
    { id: 3, name: "Himalaya", amount: 300, date: new Date(2023, 10, 3) },
    { id: 4, name: "Patanjali", amount: 400, date: new Date(2023, 10, 4) },
  ];


function printProducts(data) {
  console.log("Product saved!");
  console.log(data);
}
return (
  <>
    <div className="app">
      <NewProduct printProduct={printProducts} />
      <Products item={products} />
    </div>
  </>
);
}
export default App;
