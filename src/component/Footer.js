import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="column is-4">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="column is-4">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="#" className="icon-facebook"></a></li>
              <li><a href="#" className="icon-twitter"></a></li>
              <li><a href="#" className="icon-instagram"></a></li>
            </ul>
          </div>
        </div>
        <p className="has-text-centered">Copyright 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;