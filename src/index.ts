import Core from './core';
 import {Pane} from 'tweakpane';
 import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

// function clamp(num: number, min: number, max: number): number {
//     return num < min
//             ? max
//             : num > max
//             ? min
//             : num;
// }

async function init() {
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

    let render = function () {
        fpsGraph.begin();
        renderer.render(scene, camera);
        fpsGraph.end();
    };
    renderer.setAnimationLoop(render);

}
init();
