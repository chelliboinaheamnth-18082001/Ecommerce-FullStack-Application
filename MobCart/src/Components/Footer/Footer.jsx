import "./Footer.css"; // ✅ Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} MobCart. All rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/support" className="footer-link">
              Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
