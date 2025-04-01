// Create a basic scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });
renderer.setSize(window.innerWidth - 200, window.innerHeight); // subtract sidebar width

// Basic lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);

// Add tile (small square)
function addTile() {
  const geometry = new THREE.BoxGeometry(1, 1, 0.1); // flat square tile
  const material = new THREE.MeshPhongMaterial({ color: 0x00aaff });
  const tile = new THREE.Mesh(geometry, material);
  tile.position.set(0, 0, 0);
  scene.add(tile);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
