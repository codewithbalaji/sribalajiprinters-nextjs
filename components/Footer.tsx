
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-balaji-darkgray text-white pt-20 pb-6 relative">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
         <p className='text-balaji-purple text-2xl font-bold'>Sri Balaji Printers</p>
            <p className="text-sm text-gray-400 mb-4">
              Sri Balaji Printers was established in the year 1999. We are a leading printing company in Chennai.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-balaji-purple flex items-center justify-center hover:bg-balaji-purple/80 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-balaji-purple flex items-center justify-center hover:bg-balaji-purple/80 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-balaji-purple flex items-center justify-center hover:bg-balaji-purple/80 transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-balaji-purple flex items-center justify-center hover:bg-balaji-purple/80 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin size={50} className="mr-2 text-balaji-purple" />
                <span className="text-gray-400">No 9, Rajeshwari Complex, Cholaimedu Road, Vivek Nagar, Ambattur, Chennai, Tamil Nadu 600053</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone size={18} className="mr-2 text-balaji-purple" />
                <span className="text-gray-400">+91 9790733655</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail size={18} className="mr-2 text-balaji-purple" />
                <span className="text-gray-400">dhanasekar2k@gmail.com</span>
              </div>
            </div>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d79.9288112!3d13.0474878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655438482666!5m2!1sen!2sin" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p> Sri Balaji Printers © 2025 - All rights reserved | Designed & Developed by <a href="https://www.chennaiwebsolutions.com" className="text-balaji-purple">Chennai Web Solutions</a></p>
        </div>
      </div>
      
      <a 
        href="https://api.whatsapp.com/send?phone=919790733655" 
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 animate-bounce hover:bg-green-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
