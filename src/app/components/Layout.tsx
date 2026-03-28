import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const BRAND_LOGO_SRC = "/lighting-art-nigeria-logo.png";
const BRAND_LOGO_ALT = "Lighting Art Nigeria";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Solutions", href: "/solutions" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+2348148726286" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+234 814 872 6286</span>
            </a>
            <a href="mailto:info@lightingart-ng.com" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@lightingart-ng.com</span>
            </a>
          </div>
          <div className="text-xs hidden md:block">
            Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 py-0.5">
              <img
                src={BRAND_LOGO_SRC}
                alt={BRAND_LOGO_ALT}
                className="h-10 md:h-12 w-auto max-w-[min(100%,280px)] object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition ${
                    isActive(item.href)
                      ? "text-blue-600 font-semibold"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 px-4 rounded transition ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link
                to="/"
                className="inline-flex mb-4 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-white/10"
              >
                <img
                  src={BRAND_LOGO_SRC}
                  alt={BRAND_LOGO_ALT}
                  className="h-10 sm:h-11 w-auto max-w-[240px] object-contain object-left"
                />
              </Link>
              <p className="text-slate-400 text-sm">
                Leading provider of LED screen sales, installation, maintenance, and procurement services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>LED Screen Sales</li>
                <li>Installation Services</li>
                <li>Maintenance & Repairs</li>
                <li>Procurement Services</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+234 814 872 6286</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@lightingart-ng.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Block 134, Flat 2 LSDPC Medium Estate, Ogba Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Lighting Art Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
