function Product(x){//x is key  value is productObj -- {x:{productObj}}
    //state
    console.log(x)
    const{productObj}=x;
//return
return(
    <div>
        <h1 className="text">{productObj.title}</h1>
        <h1 >{productObj.price}</h1>
        <h1 >{productObj.description}</h1>
    </div>
)
    
}

export default Product;