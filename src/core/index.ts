import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
//import {RenderPixelatedPass} from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
//import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';


export default class Core {
    public scene: THREE.Scene;
    public camera: THREE.Camera;
    public lights: THREE.Light[];
    public objects: THREE.Mesh[];
    public renderer: THREE.WebGLRenderer;
    public controls: OrbitControls;

    constructor() {
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

        scene.background = new THREE.Color( 0x151729 );
        return scene;
    }

    /* 🎥 Camera */
    private initCamera(): THREE.Camera {
//        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 200);
//        camera.position.set(0, -0.5, 8);
//        camera.lookAt(new THREE.Vector3(0, -0.5, 0))
//
        const aspectRatio = window.innerWidth / window.innerHeight;
        const camera = new THREE.OrthographicCamera( - aspectRatio, aspectRatio, 1, - 1, 0.1, 10 );
        camera.position.y = 2 * Math.tan( Math.PI / 6 );
        camera.position.z = 2;

        return camera;
    }

    /* 💡 Lights */
    private initLights(): THREE.Light[] {
        let lights: THREE.Light[] = []

        // const ambient = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
        // lights.push(ambient)

        // const loader = new THREE.TextureLoader().setPath('./media/');
        // const texture = loader.load('disturb.jpg');
        // texture.minFilter = THREE.LinearFilter;
        // texture.magFilter = THREE.LinearFilter;
        // texture.encoding = THREE.sRGBEncoding;

        const spotLight = new THREE.SpotLight( 0xffffff, 1 );
        spotLight.position.set(0, 0, 4);
        lights.push(spotLight)

        // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        // this.scene.add(spotLightHelper)

        lights.forEach((light: THREE.Light) => {
            this.scene.add(light)
        });

        return lights;
    }

    /* 🗿 Objects */
    private initObjects(): THREE.Mesh[] {
        let objects: THREE.Mesh[] = []

        // create a plane geometry
        const geometry = new THREE.BoxGeometry(2, 2,0.1);

        // create a material with the texture
        const material = new THREE.MeshStandardMaterial();
        material.color = new THREE.Color(0xffffff)

        material.emissive.setHex(0x1e1e1e)

        // create a mesh with the geometry and material
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0,0,0);
        mesh.name = 'album';
        objects.push(mesh)

        objects.forEach((object: THREE.Mesh) => {
            this.scene.add(object)
        });

        return objects;
    }

    /* 🖨️ Renderer */
    private initRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("ThreeCanvas") as HTMLCanvasElement,
            antialias: true,
        });
        renderer.shadowMap.enabled = true;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement);



        return renderer;
    }

    /* 🎮 Controls */
    private initControls(): OrbitControls {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 100;
        controls.maxPolarAngle = Math.PI / 2;
        controls.target.set(0, 0, 0);
        controls.update();
        return controls;
    }
}
