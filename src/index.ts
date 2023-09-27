import Core from './core';
import {Pane} from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

function init() {
    const core = new Core();
    const camera = core.camera;
    const scene = core.scene;
    const renderer = core.renderer;

     const pane = new Pane();
     pane.registerPlugin(EssentialsPlugin);
     const fpsGraph = pane.addBlade({
       view: 'fpsgraph',
       label: 'fpsgraph',
       lineCount: 2,
     });

     const PARAMS = {
         factor: 123,
         title: 'hello',
         color: '#ff0055',
     };

     pane.addBinding(PARAMS, 'factor');
     pane.addBinding(PARAMS, 'title');
     pane.addBinding(PARAMS, 'color');

    let render = () => {
        fpsGraph.begin();
        renderer.render(scene, camera);
        fpsGraph.end();
    };
    renderer.setAnimationLoop(render);

    let onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render();
    }
    window.addEventListener('resize', onWindowResize, false)

}
init();
