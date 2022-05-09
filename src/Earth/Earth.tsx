import React, { useEffect } from 'react';
import './Earth.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// This contains the entire website
const Earth = (): JSX.Element => {

  // Linearly maps value from the range (a..b) to (c..d)
  const mapRange = (value, a, b, c, d) => {
    // First map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // Then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
  }

  const randInRange = (a, b) => {
    return Math.floor(mapRange(Math.random(), 0, 1, a, b));
  }

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1b1b1b);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg")
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
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

    // Helpers
    const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
    scene.add(lightHelper);
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    const controls = new OrbitControls(camera, renderer.domElement);

    // Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      earth.rotation.y += 0.008;

      controls.update();
    };

    animate();
  }, []);

  return (<canvas id="bg" />);
}

export default Earth;
