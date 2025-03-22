"use client"
import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-300 ">
      {/* Pre-header with contact info and social icons */}
      <div className="w-full bg-balaji-purple text-white py-2 ">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-6 text-xs ">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Phone size={14} />
                <span>+91 9790733655</span>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Mail size={14} />
                <span>dhanasekar2k@gmail.com</span>
              </div>
            </div>
            
            <div className="gap-2 hidden md:flex">
              <a href="#" className="h-5 w-5 bg-blue-800 flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="white">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="h-5 w-5 bg-black flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="white">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="h-5 w-5 bg-red-600 flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="white">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="#" className="h-5 w-5 bg-[#c13584] flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'py-4 bg-white'}`}>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <p className='text-balaji-purple text-2xl font-bold'>Sri Balaji Printers</p>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li><Link href="/" className={`font-medium hover:text-balaji-purple transition-colors ${pathname === '/' ? 'text-balaji-purple' : ''}`}>Home</Link></li>
                <li>
                  <Link href="/about" className={`font-medium hover:text-balaji-purple transition-colors ${pathname === '/about' ? 'text-balaji-purple' : ''}`}>
                    About Us
                  </Link>
                </li>
                <li><Link href="/services" className={`font-medium hover:text-balaji-purple transition-colors ${pathname === '/services' ? 'text-balaji-purple' : ''}`}>Services</Link></li>
                <li><Link href="/gallery" className={`font-medium hover:text-balaji-purple transition-colors ${pathname === '/gallery' ? 'text-balaji-purple' : ''}`}>Gallery</Link></li>
                <li><Link href="/contact" className={`font-medium hover:text-balaji-purple transition-colors ${pathname === '/contact' ? 'text-balaji-purple' : ''}`}>Contact Us</Link></li>
              </ul>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-balaji-purple"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="container px-4 mx-auto py-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li><Link href="/" className={`block font-medium text-lg hover:text-balaji-purple transition-colors ${pathname === '/' ? 'text-balaji-purple' : ''}`}>Home</Link></li>
                <li><Link href="/about" className={`block font-medium text-lg hover:text-balaji-purple transition-colors ${pathname === '/about' ? 'text-balaji-purple' : ''}`}>About Us</Link></li>
                <li><Link href="/services" className={`block font-medium text-lg hover:text-balaji-purple transition-colors ${pathname === '/services' ? 'text-balaji-purple' : ''}`}>Services</Link></li>
                <li><Link href="/gallery" className={`block font-medium text-lg hover:text-balaji-purple transition-colors ${pathname === '/gallery' ? 'text-balaji-purple' : ''}`}>Gallery</Link></li>
                <li><Link href="/contact" className={`block font-medium text-lg hover:text-balaji-purple transition-colors ${pathname === '/contact' ? 'text-balaji-purple' : ''}`}>Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
