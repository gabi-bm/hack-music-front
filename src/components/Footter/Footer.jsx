import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-first">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <ul>
                <li className="foo-title">PRODUCTS</li>
                <li>Featured Products</li>
                <li>Pianos</li>
                <li>Drums & Percussion</li>
                <li>Guitar & Bass</li>
                <li>Wind Instruments</li>
                <li>Accesories</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="foo-title">COMMUNITY</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Worldwide Social Network</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="foo-title">SUPPORT</li>
                <li>Update & Drivers</li>
                <li>Owner's Manuals</li>
                <li>Support Documents</li>
                <li>Quik Start Video</li>
                <li>Support News</li>
                <li>Legacy Product Info</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="foo-title">ARTICLES</li>
                <li>Stories</li>
                <li>Learn</li>
                <li>Discover</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="foo-title">IR</li>
                <li>Management Policy</li>
                <li>Financial Information</li>
                <li>Ir Library</li>
                <li>Stock Information</li>
              </ul>
            </div>
            <div className="col-2">
              <ul className="font">
                <li className="foo-title">COMPANY</li>
                <li>Corporate Information</li>
                <li>Philosophy</li>
                <li>Brands</li>
                <li>Press Releases</li>
                <li>History</li>
                <li>Virtual Patent Marking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second">
        <div> © Hack Music | Products can change withot notice </div>
        <div>Contacta | Forum | Cookies & Terms</div>
      </div>
    </div>
  );
};
export default Footer;
