import React, { FC, useEffect, useRef } from 'react';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import styles from './Home.module.css';

// This is the first page on the site
const Home:FC = () => {

  const section = useRef<HTMLDivElement>(null);

  // Linearly maps value from the range (a..b) to (c..d)
  const mapRange = (value: number, a: number, b: number, c: number, d: number) => {
    // First map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // Then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
  }

  const randInRange = (a: number, b: number) => {
    return Math.floor(mapRange(Math.random(), 0, 1, a, b));
  }

  const render = () => {
    if (!section.current) return;

    const w = section.current.clientWidth;
    const h = section.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2E2C2C);
    const camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#canvas") as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    // Object, G = Geometry, M = Material
    const earthG = new THREE.SphereGeometry(12, 60, 60);
    const earthM = new THREE.MeshPhongMaterial();
    earthM.map = THREE.ImageUtils.loadTexture('Textures/Earth/diffuse.jpg');
    earthM.bumpMap = THREE.ImageUtils.loadTexture('Textures/Earth/Bump Map.jpg');
    earthM.specularMap = THREE.ImageUtils.loadTexture('Textures/Earth/Specular.jpg')
    earthM.specular = new THREE.Color('grey')
    earthM.bumpScale = 0.15;
    const earth = new THREE.Mesh(earthG, earthM);
    earth.rotation.z = 0.235;
    scene.add(earth);

    for (let i = 0; i < 200; i++) {
      const starG = new THREE.SphereGeometry(1, 25, 25);
      const starM = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starG, starM);
      star.position.set(
        randInRange(-200, 200),
        randInRange(-200, 200),
        randInRange(-200, 200)
      );
      //scene.add(star);
    }

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xFFFFff, 1);
    directionalLight.position.set(200, 100, 0);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    // Helpers
    const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
    //scene.add(lightHelper);
    const gridHelper = new THREE.GridHelper(200, 50);
    //scene.add(gridHelper);
    //const controls = new OrbitControls(camera, renderer.domElement);

    // Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      earth.rotation.y += 0.008;

      //controls.update();
    };

    animate();
  }

  useEffect(() => {
    if (section.current) {
      //render();
    }

    //window.addEventListener('resize', render);
    return () => {
      window.removeEventListener('resize', render);
    };
  }, [section]);

  return (
    <>
      <div className="spacer" id="home" />
      <div ref={section} className={`section ${styles.container}`}>
        <canvas id="canvas" />
      </div>
    </>
  );
}

export default Home;
