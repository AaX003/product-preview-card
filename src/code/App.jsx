import "../css/App.css";
import { useState } from "react";
import cart from "../assets/icon-cart.svg";

import { MdOpenInFull } from "react-icons/md";
import { MdOutlineCloseFullscreen } from "react-icons/md";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const ShowProductInfo = () => {
    setShowInfo(prev => !prev);
  };
return (
    <div className="container">
      <div className="product-card-container">
        <div className={`bg-img-wrapper ${!showInfo ? "opened" : ""}`}>
          <div className="show-btn-wrapper">
            <button className="show-info-btn" onClick={ShowProductInfo}>
              {showInfo ? <MdOutlineCloseFullscreen /> : <MdOpenInFull />}
            </button>
          </div>
          <div className="bg-title-wrapper">
            {!showInfo && (
              <h1 className="bg-title">
                Gabrielle Essence Eau De Parfum
              </h1>
            )}
          </div>
          
        </div>

      
          <div
            className={`product-card-info ${showInfo ? "open" : ""}`}
            aria-hidden={!showInfo}
          >

            <div className="breadcrumb-wrapper">
              <small className="breadcrumb">
                Perfume
              </small>
            </div>
            <div className="product-title-wrapper">
              <h1 className="product-title">
                Gabrielle Essence Eau De Parfum
              </h1>
            </div>

            <p className="product-subtitle">
              A floral, solar and voluptuous
              interpretation composed by 
              Olivier Polge, Perfumer-Creator 
              for the house of CHANEL.
            </p>

            <div className="product-price-wrapper">
              <span className="price">$149.99</span>
              <span className="nprice">$169.99</span>
            </div>

            <div className="btn-wrapper">
              <button className="add-to-cart-btn">
                <span className="svg-wrapper">
                  <img src={cart} alt="Cart Icon" />
                </span>
                Add to Cart
              </button>
            </div>
          </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/AaX003" target="_blank" rel="noopener noreferrer">AXACODES</a>.
    </div>
    </div>
  );
}

export default App;