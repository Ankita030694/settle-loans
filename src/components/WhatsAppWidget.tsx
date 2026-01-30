'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = '919821219819';
  const message = 'I want to settle my loans';
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
      aria-label="Chat with us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppWidget;
