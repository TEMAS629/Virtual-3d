const Panorama1 = new PANOLENS.ImagePanorama('assets/Panorama_1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/Panorama_2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/Panorama_3.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/Panorama_4.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/Panorama_5.jpg');
const Panorama6 = new PANOLENS.ImagePanorama('assets/Panorama_6.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
    // Вход в парк
    new THREE.Vector3(2100, 0, 100),
    new THREE.Vector3(-2100, 0, -400),
    // Связь центра парка и пушек
    new THREE.Vector3(2100, 0, -500),
    new THREE.Vector3(600, 0, -2500),
    // Связь пушек и самолёта
    new THREE.Vector3(-200, 0, 1500),
    new THREE.Vector3(500, 0, -1500),
    // Связь самолёта и танков
    new THREE.Vector3(-800, 0, -1500),
    new THREE.Vector3(-700, 0, 1500),
    // Связь танков и центра
    new THREE.Vector3(500, 0, -1500),
    new THREE.Vector3(-500, 0, -1500),
    new THREE.Vector3(2000, 0, 800),
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});

// Связь с входом в парк 
Panorama1.link(Panorama2, SpotPositions[0]);
Panorama2.link(Panorama1, SpotPositions[1]);
// центром и танками
Panorama2.link(Panorama5, SpotPositions[10]);
Panorama5.link(Panorama2, SpotPositions[5]);
// центром и стендами
Panorama2.link(Panorama6, SpotPositions[9]);
Panorama6.link(Panorama2, SpotPositions[1]);

// Связь центра парка и пушек
Panorama2.link(Panorama3, SpotPositions[2]);
Panorama3.link(Panorama2, SpotPositions[3]);

// Связь пушек и самолёта
Panorama3.link(Panorama4, SpotPositions[4]);
Panorama4.link(Panorama3, SpotPositions[5]);

// Связь переговорной_1 и переговорной_2

// Связь самолёта и танков
Panorama4.link(Panorama5, SpotPositions[6]);
Panorama5.link(Panorama4, SpotPositions[7]);


viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6);
