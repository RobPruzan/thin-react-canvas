"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCanvas = void 0;
var react_1 = require("react");
var useCanvas = function (_a) {
    var camera = _a.camera, canvasRef = _a.canvasRef, rotation = _a.rotation, scale = _a.scale, effectDeps = _a.effectDeps, effectFn = _a.effectFn;
    (0, react_1.useEffect)(function () {
        // const canvas = canvasRef?.current;
        // const ctx = canvas?.getContext('2d');
        // if (!ctx) return;
        // if (!canvas) return;
        // // Apply transformations to context
        // Draw.translateContext(ctx, camera);
        // Draw.scaleContext(ctx, scale, camera);
        // Draw.rotateContext(ctx, rotation, camera);
        // Geometry.grid(ctx, canvas.width, canvas.height, 50);
        // effectFn(ctx);
    }, effectDeps);
};
exports.useCanvas = useCanvas;
//# sourceMappingURL=index.js.map