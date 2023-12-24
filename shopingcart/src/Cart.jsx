import React from 'react';

function Cart({ cart, removefromCart }) {
  return (
    <div>
      <div className="container">
        <div className="row" style={{ marginLeft: "20px", marginTop: '20px' }}>
          {cart.map((product) => (
            <div key={product.id} className="col-md-3 mb-3 mr-2">
              <div className="card" style={{ width: "18rem", height: '35rem', margin: '10px' }}>
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
                  <button className="btn btn-primary">Buy Now</button>
                  <button className="btn btn-danger" 
                  onClick={()=>{
                    removefromCart(product)
                  }}>Remove from cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
