import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import * as THREE from 'three';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cubeColor, setCubeColor] = useState(0x00ff00); // A cor do cubo agora está no estado
  const [clicked, setClicked] = useState(false); // Para saber se o cubo foi clicado

  useEffect(() => {
    // Cena, câmera e renderizador do Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Alterando o fundo para um tom mais agradável
    scene.background = new THREE.Color(0x87CEEB); // Azul suave (Sky Blue), pode ser ajustado para um gradiente mais complexo

    // Criando um cubo com a cor definida
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: cubeColor }); // Usando o estado da cor
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Partículas de chuva
    const rainGeometry = new THREE.SphereGeometry(0.05, 8, 8); // Partículas pequenas
    const rainMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff });
    const raindrops: THREE.Mesh[] = [];

    const numRaindrops = 1000; // Número de gotas de chuva

    // Criar gotas de chuva
    for (let i = 0; i < numRaindrops; i++) {
      const raindrop = new THREE.Mesh(rainGeometry, rainMaterial);
      raindrop.position.set(
        Math.random() * 10 - 5, // posição aleatória em X
        Math.random() * 10 - 5, // posição aleatória em Y
        Math.random() * 10 - 5  // posição aleatória em Z
      );
      raindrops.push(raindrop);
      scene.add(raindrop);
    }

    // Posicionando a câmera
    camera.position.z = 5;

    // Variáveis de controle de animação
    let speed = 0.01;
    let targetPosition = { ...mousePosition }; // Posição do mouse para suavizar o movimento

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Suavizar a transição de posição do cubo (dá uma sensação de "seguição" menos rígida)
      cube.position.x += (targetPosition.x - cube.position.x) * 0.1;
      cube.position.y += (targetPosition.y - cube.position.y) * 0.1;

      // Alterando a cor do cubo com base no estado de clique
      cube.material.color.set(cubeColor);

      // Rotacionando o cubo
      if (clicked) {
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
      }

      // Movimento das gotas de chuva (animação)
      raindrops.forEach((raindrop) => {
        raindrop.position.y -= 0.1; // Movendo a gota para baixo
        if (raindrop.position.y < -5) {
          // Reposiciona a gota para o topo quando ela sai da tela
          raindrop.position.y = 5;
          raindrop.position.x = Math.random() * 10 - 5; // Nova posição aleatória no eixo X
          raindrop.position.z = Math.random() * 10 - 5; // Nova posição aleatória no eixo Z
        }
      });

      // Renderizando a cena
      renderer.render(scene, camera);
    };

    animate();

    // Função para lidar com o movimento do mouse
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: (event.clientX / window.innerWidth) * 2 - 1, y: -(event.clientY / window.innerHeight) * 2 + 1 });
      targetPosition = { x: (event.clientX / window.innerWidth) * 2 - 1, y: -(event.clientY / window.innerHeight) * 2 + 1 };
    };

    // Função para lidar com o clique do mouse
    const handleMouseClick = () => {
      setClicked((prev) => !prev); // Alterna o estado de clique
      setCubeColor(clicked ? 0x00ff00 : 0xff0000); // Alterna entre verde e vermelho
    };

    // Adicionando eventos de mouse
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    // Ajuste dinâmico para redimensionamento da janela
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    // Limpeza de eventos na desmontagem
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, [mousePosition, cubeColor, clicked]);  // Reage a mudanças em mousePosition, cubeColor e clicked

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default App;
