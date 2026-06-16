import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButton = ({ productName }) => {
  const message = productName 
    ? `Hello Beena Auto Accessories. I am interested in ${productName}. Please share details.`
    : "Hello Beena Auto Accessories. I am interested in Honda spare parts. Please assist me.";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/918779732651?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col space-y-3">
      <a 
        href="tel:+918779732651"
        className="bg-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/10"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
