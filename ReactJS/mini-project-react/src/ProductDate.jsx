const ProductDate = (porps)=>{
    const month = porps.date.toLocaleString('en-US', { month: 'long' });
    const day = porps.date.toLocaleString('en-US', { day: '2-digit' });
    const year = porps.date.getFullYear();

    return (
        <div className="product-date">
            <div className="product-date__month">{month}</div>
            <div className="product-date__year">{year}</div>
            <div className="product-date__day">{day}</div>
        </div>
    );
}

export default ProductDate;