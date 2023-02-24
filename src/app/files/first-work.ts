import * as THREE from 'three';

export const firstWork = () => {
  //Creating scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0aa1ae');
  scene.fog = new THREE.Fog('blue', 0.3, 9);

  // Add background
  const loader = new THREE.TextureLoader();
  loader.load('assets/beach-background.jpg', function (texture) {
    scene.background = texture;
  });

  // Add camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const element = document.body.appendChild(renderer.domElement);

  // Add geometry
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 'red' /* wireframe: true */ });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  // Animation
  const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

  return element;
};
