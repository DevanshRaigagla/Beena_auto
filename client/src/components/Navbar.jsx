import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { to: '/',           label: 'Home'          },
  { to: '/categories', label: 'Genuine Parts' },
  { to: '/models',     label: 'Car Models'    },
  { to: '/quote',      label: 'Inquiry'       },
  { to: '/about',      label: 'About'         },
  { to: '/contact',    label: 'Contact'       },
];

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On home: transparent until scrolled; on all other pages: always solid white
  const solidBg = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        solidBg
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-1">
            <span className={`text-2xl font-bold tracking-tight transition-colors ${solidBg ? 'text-primary' : 'text-white'}`}>
              Beena Auto
            </span>
            <span className={`font-light italic text-sm ml-1 transition-colors ${solidBg ? 'text-secondary' : 'text-white/60'}`}>
              Accessories
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-7">
            {NAV_LINKS.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-colors relative group ${
                    solidBg
                      ? active ? 'text-primary' : 'text-gray-600 hover:text-primary'
                      : active ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918779732651"
              className={`flex items-center gap-2 font-bold text-sm transition-colors ${solidBg ? 'text-primary' : 'text-white'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${solidBg ? 'bg-primary/10' : 'bg-white/20'}`}>
                <Phone size={16} className={solidBg ? 'text-primary' : 'text-white'} />
              </div>
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <Link
              to="/quote"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+918779732651" className={solidBg ? 'text-primary' : 'text-white'}>
              <Phone size={22} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${solidBg ? 'text-gray-700' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-up">
          <div className="px-4 py-2">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-4 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors ${
                  location.pathname === to ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                {label}
                {location.pathname === to && <span className="w-1.5 h-1.5 bg-primary rounded-full" />}
              </Link>
            ))}
            <div className="py-4">
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
