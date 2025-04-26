// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-secondary-light mb-4">CocoPeat</h2>
            <p className="text-gray-400 mb-6">
              Premium coconut peat products for sustainable gardening and commercial agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-secondary-light transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary-light transition-colors">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-secondary-light transition-colors">Benefits</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-secondary-light transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-secondary-light transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Coco Peat Blocks</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Grow Bags</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Potting Mix</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Fine Coco Peat</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Bulk Orders</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary-light transition-colors">Custom Blends</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <address className="text-gray-400 not-italic">
              123 Coconut Way<br />
              Green Gardens, CA 94123<br />
              United States
            </address>
            <p className="text-gray-400 mt-4">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400">Email: info@cocopeat-example.com</p>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} CocoPeat. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary-light transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;