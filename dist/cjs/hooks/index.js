"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCanvas = void 0;
var react_1 = require("react");
var __1 = require("..");
var useCanvas = function (_a) {
    var camera = _a.camera, canvasRef = _a.canvasRef, rotation = _a.rotation, scale = _a.scale, effectDeps = _a.effectDeps, effectFn = _a.effectFn;
    // const previousMousePosRef = useRef<[number, number] >([0,0]);
    (0, react_1.useEffect)(function () {
        var canvas = canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current;
        var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        if (!ctx || !canvas)
            return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Save the original context state
        ctx.save();
        // Apply the transformations
        __1.Draw.translateContext(ctx, camera);
        __1.Draw.scaleContext(ctx, scale, camera);
        __1.Draw.rotateContext(ctx, rotation, camera);
        // Draw the grid over a larger area than the canvas to ensure it covers the whole visible area
        // You might need to adjust the size of the grid (third and fourth parameters) depending on the scale and camera position
        __1.Geometry.grid(ctx, camera, scale, canvas.width * 2, canvas.height * 2, 50);
        // Draw the rest of your elements
        effectFn(ctx);
        // Restore the context state
        ctx.restore();
    }, effectDeps);
};
exports.useCanvas = useCanvas;
//# sourceMappingURL=index.js.map