import "./Product.css";
import Price from "./Price";
function Product({title,idx}) {
  let oldPrice = ["12,500","11,900","1,799","499"];
  let newPrice = ["10,500","9,900","1,299","299"];
  let description = ["8000 DPI","intuitive surface","designed for ipad pro","wireless"];

  return (
    <div className="Product">
    <h4>{title}</h4>
     <p>{description[idx]}</p>
     <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
export default Product;
