import { createRenderer } from "react-addons-test-utils";

function renderShallow(component) {
    const renderer = createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

export { renderShallow };
