

export default function Cart() {
    return (
      <div className="cart-container">
        <header className="cart-header">
          <h1>Your cart items</h1>
          <a href="/catalog" className="back-to-shopping">Back to shopping</a>
        </header>
        <div className="cart-table">
          <div className="cart-item">
            <div className="product-details">
              <img src="/path-to-image.jpg" alt="Moonday for 80m" />
              <div>
                <h3>Moonday for 80m</h3>
                <a href="#" className="remove-item">Remove</a>
              </div>
            </div>
            <div className="product-price">$10,000</div>
            <div className="product-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="product-total">$10,000</div>
          </div>
        </div>
        <div className="cart-summary">
          <div className="subtotal">
            <span>Sub-total</span>
            <span>$10,000</span>
          </div>
          <p className="tax-note">Tax and shipping cost will be calculated later</p>
          <button className="checkout-button">Check-out</button>
        </div>
      </div>
    );
  }
  