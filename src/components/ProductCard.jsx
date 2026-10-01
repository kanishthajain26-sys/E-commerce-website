import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="price">
        ${product.price}
      </p>

      <Link
        to={`/products/${product.id}`}
        className="view-button"
      >
        View Details
      </Link>

    </div>
  );
}

export default ProductCard;