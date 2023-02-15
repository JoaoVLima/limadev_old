import Core from './core'
import * as THREE from "three";
import {PLYLoader} from "three/examples/jsm/loaders/PLYLoader";

function init(){
    const core = new Core();
    const camera = core.camera
    const scene = core.scene
    const renderer = core.renderer

    const geometry = new THREE.PlaneGeometry( 1000, 1000 );
    const material = new THREE.MeshLambertMaterial( { color: 0x808080 } );

    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, - 1, 0 );
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add( mesh );

    new PLYLoader().load( './Lucy100k.ply', function ( geometry ) {

        geometry.scale( 0.024, 0.024, 0.024 );
        geometry.computeVertexNormals();

        const material = new THREE.MeshLambertMaterial();

        const mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.y = - Math.PI / 2;
        mesh.position.y = 18;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );

    } );



    let onWindowResize = function () {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    window.addEventListener( 'resize', onWindowResize );

    let render = function () {
        // const time = performance.now() / 3000;
        // spotLight.position.x = Math.cos( time ) * 25;
        // spotLight.position.z = Math.sin( time ) * 25;
        // spotLight.angle = Math.sin( time );

        // lightHelper.update();

        renderer.render(scene, camera);

    };
    renderer.setAnimationLoop( render );
}

init();
