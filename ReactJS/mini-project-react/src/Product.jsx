import ProductItem from "./ProductItem";
import Card from "./Card";

const Product = (props)=>{
    return(
        <Card className="products"> 
         <ProductItem 
         name={props.item[0].name}
         amount={props.item[0].amount}
         date={props.item[0].date} 
         />
            <ProductItem
            name={props.item[1].name}
            amount={props.item[1].amount}
            date={props.item[1].date}
            />
            <ProductItem
            name={props.item[2].name}
            amount={props.item[2].amount}
            date={props.item[2].date}
            />
            <ProductItem
            name={props.item[3].name}
            amount={props.item[3].amount}
            date={props.item[3].date}
            />
        </Card>
    )
}

export default Product;