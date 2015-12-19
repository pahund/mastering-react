import { jsdom } from "jsdom";
import { createRenderer } from "react-addons-test-utils";

function setupFakeDOM() {
    global.document = jsdom("<!doctype html><html><body></body></html>");
    global.window = document.defaultView;
    global.navigator = global.window.navigator;
}

function renderShallow(component) {
    const renderer = createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

export {
    setupFakeDOM,
    renderShallow
};
