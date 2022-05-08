import React, { useEffect } from 'react';
import './Website.css';
import * as THREE from 'three';

// This contains the entire website
function Website(): React.ReactNode {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg")
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);

    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      torus.rotation.x += 0.01;
    };

    animate();
  }, []);

  return (
    <div className="main">
      <canvas id="bg" />
    </div>
  );
}

export default Website;
