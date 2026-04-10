import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  // Good copywriting message tailored for enterprise cybersecurity inquiries
  const message = "Hi EHACK Technology team, I'm interested in learning more about your enterprise cybersecurity services. Can you help me with more details or schedule a quick call?";
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send/?phone=919886035330&text=${encodedText}&type=phone_number&app_absent=0`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float" 
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-content">
        <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2.05A13.92 13.92 0 0 0 2.08 16c0 2.45.64 4.8 1.84 6.89L2 29.95l7.26-1.9a13.9 13.9 0 0 0 6.74 1.74h.01c7.68 0 13.92-6.24 13.92-13.92A13.88 13.88 0 0 0 16 2.05Zm0 23.47h-.01a11.5 11.5 0 0 1-5.91-1.63l-.42-.25-4.4 1.15 1.17-4.29-.28-.44A11.5 11.5 0 0 1 4.41 16c0-6.4 5.2-11.6 11.6-11.6 3.1 0 6.01 1.2 8.2 3.4 2.2 2.2 3.4 5.11 3.4 8.2 0 6.39-5.19 11.52-11.61 11.52Zm6.36-8.7c-.35-.17-2.06-1.02-2.38-1.13-.32-.12-.55-.17-.78.18-.23.35-.9 1.13-1.11 1.36-.2.23-.41.26-.76.09-1.9-.88-3.32-1.98-4.57-3.95-.12-.19-.01-.29.16-.47.16-.16.35-.41.53-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.89-1.07-2.58-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.61.08-.93.43-.32.35-1.22 1.19-1.22 2.91s1.25 3.38 1.42 3.61c.17.23 2.46 3.76 5.96 5.27 2.06.89 2.87 1.05 3.93.88.94-.15 2.06-.84 2.35-1.66.29-.81.29-1.5.2-1.65-.08-.14-.31-.22-.65-.39Z" fill="white" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
