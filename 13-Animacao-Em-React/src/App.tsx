import React, { useState, useEffect } from 'react';
import Cat from './components/Cat';
import './App.css';

function App() {
  const [laserPosition, setLaserPosition] = useState({ x: 0, y: 0 });
  const [laserAngle, setLaserAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Atualizando a posição do laser
      setLaserPosition({ x: mouseX, y: mouseY });

      // Calculando o ângulo do laser
      const angle = Math.atan2(mouseY - window.innerHeight / 2, mouseX - window.innerWidth / 2) * (180 / Math.PI);
      setLaserAngle(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      {/* Laser */}
      <div
        className="laser"
        style={{
          top: laserPosition.y + 'px',
          left: laserPosition.x + 'px',
          transform: `rotate(${laserAngle}deg)`, // Rota o laser conforme a direção do mouse
        }}
      />
      {/* Gato */}
      <Cat />
    </div>
  );
}

export default App;
