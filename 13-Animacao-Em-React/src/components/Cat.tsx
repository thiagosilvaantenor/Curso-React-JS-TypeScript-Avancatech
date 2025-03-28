import React, { useState, useEffect } from 'react';
import './Cat.css';

const Cat: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const dx = mousePosition.x - position.x;
    const dy = mousePosition.y - position.y;
    
    // Determinar se o gato está se movendo
    setIsWalking(Math.abs(dx) > 10 || Math.abs(dy) > 10);

    // Movimento suave
    const moveSpeed = 0.1;
    const newX = position.x + dx * moveSpeed;
    const newY = position.y + dy * moveSpeed;

    setPosition({ x: newX, y: newY });
  }, [mousePosition]);

  return (
    <div 
      className={`cat ${isWalking ? 'walking' : ''}`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px) 
                    scaleX(${mousePosition.x > position.x ? 1 : -1})`
      }}
    >
      <div className="cat-body">
        <div className="cat-head">
          <div className="cat-eyes">
            <div className="cat-eye"></div>
            <div className="cat-eye"></div>
          </div>
          <div className="cat-whiskers">
            <div className="whisker whisker-left-1"></div>
            <div className="whisker whisker-left-2"></div>
            <div className="whisker whisker-right-1"></div>
            <div className="whisker whisker-right-2"></div>
          </div>
        </div>
        <div className="cat-tail"></div>
      </div>
    </div>
  );
};

export default Cat;
