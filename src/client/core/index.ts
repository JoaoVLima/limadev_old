import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Core {
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public lights: THREE.Light[];
    public renderer: THREE.WebGLRenderer;
    public controls: OrbitControls;

    constructor() {
        this.scene = this.initScene();
        this.camera = this.initCamera();
        this.lights = this.initLights();
        this.renderer = this.initRenderer();
        this.controls = this.initControls();
    }

    /* 📦 Scene */
    private initScene(): THREE.Scene {
        return new THREE.Scene();
    }

    /* 🎥 Camera */
    private initCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 70, 50, 10 );
        return camera;
    }

    /* 💡 Lights */
    private initLights(): THREE.Light[] {
        let lights: THREE.Light[] = []

        const ambient = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.05 );
        lights.push(ambient)

        const loader = new THREE.TextureLoader().setPath( './' );
        const texture = loader.load('disturb.jpg');
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.encoding = THREE.sRGBEncoding;


        const spotLight = new THREE.SpotLight( 0xffffff, 5 );
        spotLight.position.set( 25, 50, 25 );
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 1;
        spotLight.decay = 2;
        spotLight.distance = 100;
        spotLight.map = texture;

        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 200;
        spotLight.shadow.focus = 1;
        lights.push(spotLight)

        // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        // this.scene.add(spotLightHelper)

        lights.forEach((light: THREE.Light) => {
            this.scene.add(light)
        });

        return lights;
    }

    /* 🖨️ Renderer */
    private initRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        return renderer;
    }

    /* 🎮 Controls */
    private initControls(): OrbitControls {
        const controls = new OrbitControls(this.camera, this.renderer.domElement );
        controls.minDistance = 20;
        controls.maxDistance = 100;
        controls.maxPolarAngle = Math.PI / 2;
        controls.target.set( 0, 18, 0 );
        controls.update();
        return controls;
    }
}
