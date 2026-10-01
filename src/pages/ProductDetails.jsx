import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  function addToCart() {
    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    oldCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(oldCart)
    );

    alert("Product added to cart 🛒");

    navigate("/cart");
  }

  if (loading) {
    return (
      <div className="message">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="message">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-card">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="details-content">

          <p className="category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="details-price">
            ${product.price}
          </p>

          <p>
            {product.description}
          </p>

          <p>
            ⭐ {product.rating}
          </p>

          <button
            onClick={addToCart}
            className="cart-button"
          >
            Add to Cart 🛒
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;