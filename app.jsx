

```jsx
import React, { useState } from 'react';

const MagnusMentalHealth = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
    }, 3000);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavBar = () => (
    <nav className="bg-[#0f172a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Magnus Mental Health</h1>
                <p className="text-xs text-blue-300 tracking-widest uppercase">LLC</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {['home', 'services', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                  currentPage === page
                    ? 'bg-[#3b82f6] text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            {['home', 'services', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                  currentPage === page
                    ? 'bg-[#3b82f6] text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Magnus Mental Health, LLC</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Empowering individuals to achieve mental wellness through professional coaching, 
              evidence-based strategies, and compassionate support. Your journey to a healthier 
              mind starts here.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => navigateTo(page)}
                    className="text-gray-400 hover:text-white text-sm transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0