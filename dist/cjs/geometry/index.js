"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grid = void 0;
var grid = function (ctx, width, height, gridSize) {
    // Create an off-screen canvas
    var patternCanvas = document.createElement('canvas');
    var patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx)
        return;
    // Make the size of the canvas the same as the grid size
    patternCanvas.width = gridSize;
    patternCanvas.height = gridSize;
    // Draw horizontal and vertical grid lines
    patternCtx.beginPath();
    patternCtx.moveTo(0, gridSize);
    patternCtx.lineTo(gridSize, gridSize);
    patternCtx.moveTo(gridSize, 0);
    patternCtx.lineTo(gridSize, gridSize);
    patternCtx.strokeStyle = '#999';
    patternCtx.stroke();
    // Create a pattern and set it as the fill style
    var pattern = ctx.createPattern(patternCanvas, 'repeat');
    if (!pattern)
        return;
    ctx.fillStyle = pattern;
    // Draw the pattern across the entire canvas
    ctx.fillRect(0, 0, width, height);
};
exports.grid = grid;
// // Usage:
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// drawGrid(ctx, canvas.width, canvas.height, 50);
//# sourceMappingURL=index.js.map