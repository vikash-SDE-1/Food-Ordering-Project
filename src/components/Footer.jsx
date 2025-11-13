import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>FoodHub</h3>
          <p>Serving cravings since 2024.</p>
        </div>
        <div>
          <p>Open daily 10am – 10pm</p>
          <p>Questions? hello@foodhub.com</p>
        </div>
        <div className="footer-social">
          <a href="#!" aria-label="Instagram">Instagram</a>
          <a href="#!" aria-label="Facebook">Facebook</a>
          <a href="#!" aria-label="Twitter">Twitter</a>
        </div>
      </div>
      <p className="footer-note">&copy; {new Date().getFullYear()} FoodHub. All rights reserved.</p>
    </footer>
  )
}

export default Footer

