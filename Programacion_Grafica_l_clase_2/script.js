const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;

//Este es el rectangulo por defecto que nos dio uds ing
const geometría = new THREE.PlaneGeometry(100, 100); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const rectángulo = new THREE.Mesh(geometría, material);
escena.add(rectángulo);

//Esta es la esfera que yo puse :D
const geometríaEsfera = new THREE.SphereGeometry(100, 100);
const materialEsfera = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const esfera = new THREE.Mesh(geometríaEsfera, materialEsfera);
escena.add(esfera);
esfera.position.x = 200;

//La animacion de el rectangulo
function animacion() {
    requestAnimationFrame(animacion);
    rectángulo.rotation.z += 0.01;  
    renderizador.render(escena, camara);
}

//La animacion de mi esfera
function animacion() {
    requestAnimationFrame(animacion);
    rectángulo.rotation.z += 0.01;
    esfera.position.y = Math.sin(Date.now() * 0.002) * 100;
    renderizador.render(escena, camara);
}

animacion();
window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});