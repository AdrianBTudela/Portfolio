var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
document.getElementById("div1").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

camera.position.z = 5;

const mtlLoader = new THREE.MTLLoader();
mtlLoader.load("assets/pc.mtl", mtlParseResult => {
    const objLoader = new THREE.OBJLoader();
    objLoader.load("assets/pc.obj", obj => scene.add(obj));
});
var animate = function () {
	requestAnimationFrame( animate );

	renderer.render(scene, camera);
};

animate();
        