import React, { useState } from 'react';
import './FAQ.css';

function FAQaccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="FAQ-accordion">
      <button className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>+
          
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? 'expanded' : ''}`}>
        <div className='content-line'/>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FAQaccordion;
