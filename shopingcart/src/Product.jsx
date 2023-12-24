import React from "react";
import "./navbar.css"

function Product({ products, addtoCart, isInCart, removefromCart }) {
  return (
   <div>
     <div className="container">
      <div className="row" style={{marginTop: '20px',  }}>
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-3 mr-2">
            <div className="card cart-card" style={{ width: "18rem", height: '30rem', margin: '10px', 
          display:'flex', justifyContent:'space-between'}}>
              <img
                className="card-img-top"
                style={{ height: '15rem' }}
                src={product.image}
                alt="Card cap"
              />
              <div className="card-body">
                <p className="card-text">{product.title}</p>
                <p className="card-text" style={{ fontWeight: "bold" }}>Price: ${product.price}</p>
                <p className="card-text" style={{ fontWeight: "bold" }}>Rating: {product.rating.rate}</p>
                <button className="btn btn-primary" style={{}} >Buy Now</button>
                {isInCart(product) ? (
                  <button className="btn btn-danger" 
                  onClick={()=>{
                    removefromCart(product)
                  }}>Remove from Cart</button>
                ):(
                  <button className="btn btn-secondary" 
                  onClick={()=>{
                    addtoCart(product)
                  }} >Add to cart</button>
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}

export default Product;
