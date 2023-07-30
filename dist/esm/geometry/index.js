// export const grid = (
// ctx: CanvasRenderingContext2D,
// camera: [number, number],
// scale: number,
// width: number,
// height: number,
// gridSize: number
// ) => {
//   // Create an off-screen canvas
//   const patternCanvas = document.createElement('canvas');
//   const patternCtx = patternCanvas.getContext('2d');
// if (!patternCtx) return;
//   // Make the size of the canvas the same as the grid size
//   patternCanvas.width = gridSize;
//   patternCanvas.height = gridSize;
//   // Draw horizontal and vertical grid lines
//   patternCtx.beginPath();
//   patternCtx.moveTo(0, gridSize);
//   patternCtx.lineTo(gridSize, gridSize);
//   patternCtx.moveTo(gridSize, 0);
//   patternCtx.lineTo(gridSize, gridSize);
//   patternCtx.strokeStyle = '#999';
//   patternCtx.stroke();
//   // Create a pattern and set it as the fill style
//   const pattern = ctx.createPattern(patternCanvas, 'repeat');
//   if (!pattern) return;
//   ctx.fillStyle = pattern;
//   // Draw the pattern across the entire canvas
//   ctx.fillRect(
//     0,
//     0,
//     width + (camera[0] + camera[1]),
//     height + (camera[0] + camera[1])
//   );
// };
export var grid = function (ctx, camera, scale, width, height, gridSize) {
    // Create an off-screen canvas
    var patternCanvas = document.createElement('canvas');
    var patternCtx = patternCanvas.getContext('2d');
    // Make the size of the canvas the same as the grid size
    patternCanvas.width = gridSize;
    patternCanvas.height = gridSize;
    if (!patternCtx)
        return;
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
    // Calculate the extended region to cover
    // Here, Math.abs(camera.x) is the distance of the camera from the origin
    console.log(width, Math.abs(camera[1]) * 2 * scale);
    var extendedWidth = Math.max(width, Math.abs(camera[0]) * 2 * scale);
    var extendedHeight = Math.max(height, Math.abs(camera[1]) * 2 * scale);
    // Draw the pattern across the entire extended region
    ctx.fillRect(-extendedWidth / 2, -extendedHeight / 2, extendedWidth, extendedHeight);
};
//# sourceMappingURL=index.js.map