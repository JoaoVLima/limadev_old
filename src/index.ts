import Core from './core';

function init() {
    const core = new Core();
    const camera = core.camera;
    const scene = core.scene;
    const renderer = core.renderer;
    const pane = core.pane;
    const fpsGraph: any = pane.addBlade({
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


    document.body.addEventListener("mousemove", evt => {
        let mouseX = evt.clientX;
        let mouseY = evt.clientY;
        
        let d = document.getElementById('cursor') as HTMLCanvasElement;
        d.style.position = "absolute";
        d.style.left = mouseX+'px';
        d.style.top = mouseY+'px';
      })
}
init();
