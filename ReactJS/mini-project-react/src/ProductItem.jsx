import Card from "./Card"
import ProductDate from "./ProductDate"
import { useState } from "react";
const ProductItem = (props)=>{
  const [name, setName] = useState(props.name);

let onClickHandler = () => {
    setName("Popcorn");
    }

 

    return(
       <Card className="product-item">
        <ProductDate date={props.date} />
        <div className="product-item__description">
            <h2>{name}</h2>            
            </div>
            <button onClick={onClickHandler} >Add To Cart</button>
       </Card>        
    )
}

export default ProductItem;