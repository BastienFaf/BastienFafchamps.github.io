// #################################################
//       Background 3D Objects and Animations
// #################################################

// Initialization
const scene = new THREE.Scene();

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const cameraSizeFactor = 300;
const scrollFactor = 300.0;
const camera = new THREE.OrthographicCamera(sizes.width / -cameraSizeFactor, sizes.width / cameraSizeFactor, sizes.height / cameraSizeFactor, sizes.height / -cameraSizeFactor, 1, 100);
camera.position.x = 0;
camera.position.z = 10;
camera.position.y = 0 - (window.scrollY / scrollFactor);
scene.add(camera);

const canvas = document.getElementById('front-canvas');
const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;

    camera.left = sizes.width / -cameraSizeFactor;
    camera.right = sizes.width / cameraSizeFactor;
    camera.top = sizes.height / cameraSizeFactor;
    camera.bottom = sizes.height / -cameraSizeFactor;

    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Adding Objects
const density_multiplier = 0.8;
const torus_density_a = 16 * density_multiplier;
const torus_density_b = 50 * density_multiplier;

const geometry = new THREE.TorusGeometry( 2.3, 0.4, torus_density_a, torus_density_b);
const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 });
const torus = new THREE.Points(geometry, material);
torus.position.x = 3;
torus.position.y = 0.2;
torus.rotation.x = 90;
scene.add(torus);

const geometry_b = new THREE.TorusGeometry( 1.5, 0.3, torus_density_a, torus_density_b);
const material_b = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 });
const torus_b = new THREE.Points(geometry_b, material_b);
torus_b.position.x = 3;
torus_b.position.y = 0.2;
torus_b.rotation.x = 90;
scene.add(torus_b);

const geometry_c = new THREE.SphereGeometry( 2, torus_density_b, torus_density_a);
const material_c = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 });
const sphere = new THREE.Points(geometry_c, material_c);
sphere.position.x = -5.8;
sphere.position.y = -5;
sphere.rotation.z = 45;
scene.add(sphere);


// Rotation animations
const clock = new THREE.Clock();
const tick = () => {
    const deltaTime = clock.getElapsedTime();
    
    torus.rotation.y = 0.05 * deltaTime;
    torus_b.rotation.y = -0.1 * deltaTime;
    sphere.rotation.x = 0.05 * deltaTime;
    sphere.rotation.y = 0.05 * deltaTime;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();

// Stop scrolling on projects
let stopValue = [1540, 3120];
window.addEventListener("scroll", (ev) => {
    if (window.scrollY < stopValue[0])
    {
        camera.position.y = 0 - (window.scrollY / scrollFactor);
    }
    else if (window.scrollY >= stopValue[0] && window.scrollY <= stopValue[1])
    {
        camera.position.y = 0 - (stopValue[0] / scrollFactor);
    }
    else if (window.scrollY > stopValue[1])
    {
        camera.position.y = 0 - ((window.scrollY - 1580) / scrollFactor);
    }
});
