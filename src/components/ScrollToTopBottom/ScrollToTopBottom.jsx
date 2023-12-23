import { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './ScrollToTopBottom.css'; 

const ScrollToTopBottom = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    setShowScroll(window.scrollY > 100);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className={`scroll-to-top-bottom ${showScroll ? 'show' : ''}`}>
      <div className="scroll-to-top" onClick={scrollTop}>
        <FaArrowUp />
      </div>
      <div className="scroll-to-bottom" onClick={scrollBottom}>
        <FaArrowDown />
      </div>
    </div>
  );
};

export default ScrollToTopBottom;
