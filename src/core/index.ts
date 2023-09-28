import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {Pane} from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

export default class Core {
    public scene: THREE.Scene;
    public camera: THREE.Camera;
    public lights: THREE.Light[];
    public objects: THREE.Mesh[];
    public renderer: THREE.WebGLRenderer;
    public controls: OrbitControls;
    public pane: Pane;

    constructor() {
        this.pane = this.initPane();
        this.scene = this.initScene();
        this.camera = this.initCamera();
        this.lights = this.initLights();
        this.objects = this.initObjects();
        this.renderer = this.initRenderer();
        this.controls = this.initControls();

    }

    /* 📦 Scene */
    private initScene(): THREE.Scene {
        const scene = new THREE.Scene();

//         const path = 'media/background/';
//         const format = '.png';
//         const urls = [
//             path + 'px' + format, path + 'nx' + format,
//             path + 'py' + format, path + 'ny' + format,
//             path + 'pz' + format, path + 'nz' + format
//         ];
//
//         const textureCube = new THREE.CubeTextureLoader().load( urls );

//         scene.background = textureCube;

        scene.add(new THREE.AxesHelper(5))

        scene.background = new THREE.Color( 0x151729 );
        return scene;
    }

    /* 🎥 Camera */
    private initCamera(): THREE.Camera {
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 200);
        camera.position.set(0, 0, 0);
//        camera.lookAt(0, 0, 0);
        return camera;
    }

    /* 💡 Lights */
    private initLights(): THREE.Light[] {
        let lights: THREE.Light[] = [];

//        const ambient = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
//        lights.push(ambient);

//        const spotLight = new THREE.SpotLight(0xff00ff, 100, 10);
//        spotLight.position.set(0, 4, 4);
//        lights.push(spotLight);
//
//        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
//        this.scene.add(spotLightHelper);

        lights.forEach((light: THREE.Light) => {
            this.scene.add(light);
        });

        return lights;
    }

    /* 🗿 Objects */
    private initObjects(): THREE.Mesh[] {
        let objects: THREE.Mesh[] = [];

        let loader = new GLTFLoader();

        loader.load('media/the_great_drawing_room.glb', (gltf) => {
            let room = gltf.scene;
            room.scale.set(2, 2, 2);
            room.position.set(10.30, -1, 6.90);
            room.rotation.y = -0.73;


            room.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const m = child as THREE.Mesh
                    m.receiveShadow = true
                    m.castShadow = true
                }
                if ((child as THREE.Light).isLight) {
                    const l = child as THREE.SpotLight
                    l.castShadow = true
                    l.shadow.bias = -0.003
                    l.shadow.mapSize.width = 2048
                    l.shadow.mapSize.height = 2048
                }
            })

            this.scene.add(room);
        }, (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        }, (error) => {
            console.log('An error happened');
            console.log(error);
        });

//        const geometry = new THREE.BoxGeometry()
//        const material = new THREE.MeshStandardMaterial({
//            color: 0xffffff
//        })
//        const cube = new THREE.Mesh(geometry, material)
//        objects.push(cube);

        objects.forEach((object: THREE.Mesh) => {
            this.scene.add(object);
        });

        return objects;
    }

    /* 🖨️ Renderer */
    private initRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("ThreeCanvas") as HTMLCanvasElement,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.shadowMap.enabled = true;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        THREE.ColorManagement.enabled = true;
        THREE.ColorManagement.workingColorSpace = THREE.SRGBColorSpace;

        document.body.appendChild(renderer.domElement);

        const environment = new RoomEnvironment();
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        this.scene.environment = pmremGenerator.fromScene(environment).texture;

        return renderer;
    }

    /* 🎮 Controls */
    private initControls(): OrbitControls {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 100;
        controls.maxZoom = 2;
//        controls.maxPolarAngle = Math.PI / 2;
        controls.target.set(0, 0, 0);
        controls.update();
        return controls;
    }

    /* 📈 Pane */
    private initPane(): Pane {
        const pane = new Pane();
        pane.registerPlugin(EssentialsPlugin);

        pane.refresh();
        return pane;
    }
}
