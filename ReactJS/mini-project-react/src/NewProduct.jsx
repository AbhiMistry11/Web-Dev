import './NewProduct.css';
import Product from './Product';
import ProductForm from './ProductForm';
function NewProduct(props) {
function saveProduct(product){
    console.log("Product saved!");
    console.log(product);
//calling parentfunction
    props.printProduct(product);

}

 return(
    <div className='new-product'>
        <ProductForm onSaveProdut={saveProduct} />
    </div>
 )
}

export default NewProduct;