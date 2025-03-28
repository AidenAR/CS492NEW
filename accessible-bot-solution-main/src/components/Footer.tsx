
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Accessible CAPTCHA</h3>
            <p className="text-gray-600">
              Exploring and proposing accessible and inclusive alternatives to traditional CAPTCHA systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/challenges" className="text-gray-600 hover:text-primary">Challenges</Link>
              </li>
              <li>
                <Link to="/alternatives" className="text-gray-600 hover:text-primary">Alternatives</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-primary">Research</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              This project was created by Ananya Ohrie, Krishna Joshi, Phillip Carson, and Aiden Ramgoolam as part of CS 492 at the University of Waterloo.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © 2023 CS 492 Group Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
