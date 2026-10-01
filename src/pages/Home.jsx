import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">

        <div>
          <p className="small-text">WELCOME TO SHOPEASY</p>

          <h1>
            Find Products
            <br />
            You Love ❤️
          </h1>

          <p>
            Explore our collection of amazing products
            and find something perfect for you.
          </p>

          <Link to="/products" className="shop-button">
            Shop Now
          </Link>
        </div>

      </section>

      <section className="home-info">

        <div>
          <h2>🛍️ Great Products</h2>
          <p>Discover products from different categories.</p>
        </div>

        <div>
          <h2>🚚 Easy Shopping</h2>
          <p>Simple and comfortable shopping experience.</p>
        </div>

        <div>
          <h2>💳 Easy Checkout</h2>
          <p>Add your favorite products to the cart.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;