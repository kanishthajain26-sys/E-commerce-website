import { useState } from "react";

function Cart() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  function removeFromCart(index) {

    const newCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="cart-page">

      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart.</p>
        </div>

      ) : (

        <>

          <div className="cart-items">

            {cart.map((product, index) => (

              <div className="cart-item" key={index}>

                <img
                  src={product.image}
                  alt={product.title}
                />

                <div>
                  <h3>{product.title}</h3>

                  <p>
                    ${product.price}
                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                  >
                    Remove
                  </button>
                </div>

              </div>

            ))}

          </div>

          <div className="cart-total">

            <h2>
              Total: ${total.toFixed(2)}
            </h2>

            <button>
              Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;