const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Copyright */}
        <p className="text-sm text-gray-600 font-medium mb-4 md:mb-0">
          © {new Date().getFullYear()} MobCart. All rights reserved.
        </p>

        {/* Links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/support"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
