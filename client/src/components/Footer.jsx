import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Beena Auto <span className="text-primary italic font-normal text-sm">Accessories</span></h3>
            <p className="text-sm leading-relaxed">
              Premium Honda 4-Wheeler spare parts specialist. Providing genuine quality and precision engineering for all your automotive needs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm mt-2">
              <li><Link to="/categories" className="hover:text-white transition-colors">Genuine Parts</Link></li>
              <li><Link to="/models" className="hover:text-white transition-colors">Honda Models</Link></li>
              <li><Link to="/quote" className="hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Categories</h4>
            <ul className="space-y-4 text-sm mt-2">
              <li><Link to="/categories?cat=engine" className="hover:text-white transition-colors">Engine Parts</Link></li>
              <li><Link to="/categories?cat=brake" className="hover:text-white transition-colors">Brake Systems</Link></li>
              <li><Link to="/categories?cat=suspension" className="hover:text-white transition-colors">Suspension</Link></li>
              <li><Link to="/categories?cat=electrical" className="hover:text-white transition-colors">Electricals</Link></li>
              <li><Link to="/categories?cat=accessories" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm mt-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary shrink-0" />
                <span>BUSINESS_ADDRESS</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <span>PHONE_NUMBER</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary shrink-0" />
                <span>EMAIL_ADDRESS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Beena Auto Accessories. All Rights Reserved. Genuine Honda Parts.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Shipping info</a>
            <a href="#" className="hover:text-white">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
