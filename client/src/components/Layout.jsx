import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {/* Pages that have a full-viewport hero manage their own top spacing.
          Pages without a hero get the pt-20 from the section/div inside them.
          We don't apply global pt-20 here so the hero can bleed behind the navbar. */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
