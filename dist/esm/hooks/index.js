import { useEffect } from 'react';
export var useCanvas = function (_a) {
    var camera = _a.camera, canvasRef = _a.canvasRef, rotation = _a.rotation, scale = _a.scale, effectDeps = _a.effectDeps, effectFn = _a.effectFn;
    useEffect(function () {
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
//# sourceMappingURL=index.js.map