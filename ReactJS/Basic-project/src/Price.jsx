export default function Price({oldPrice,newPrice}){
    let oldStyles = {
        textDecorationLine :"line-through",
    }
    return(
     <div>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span><b>{newPrice}</b></span>
     </div>
    );
}