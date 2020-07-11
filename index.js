let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube = new THREE.Mesh(
	new THREE.BoxGeometry(),
	new THREE.MeshBasicMaterial({ color: "#c57" })
);

scene.add(cube);

camera.position.z = 5;

const axes = ['x', 'y', 'z'];

function animate() {
    requestAnimationFrame(animate);
    const axis = axes[Math.round(Math.random() * axes.length - 1)]
    cube.rotation[axis] += 0.03
	renderer.render(scene, camera);
}

animate();
