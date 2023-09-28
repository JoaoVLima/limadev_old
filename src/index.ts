import Core from './core';

function init() {
    const core = new Core();
    const camera = core.camera;
    const scene = core.scene;
    const renderer = core.renderer;
    const pane = core.pane;
    const fpsGraph = pane.addBlade({
        index: 0,
        view: 'fpsgraph',
        label: 'fpsgraph',
        lineCount: 2,
    });
    pane.refresh();


    let render = () => {
        fpsGraph.begin();
        renderer.render(scene, camera);
        fpsGraph.end();
    };
    renderer.setAnimationLoop(render);

    let onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }
    window.addEventListener('resize', onWindowResize, false);

}
init();
