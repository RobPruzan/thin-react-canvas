export const grid = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  gridSize: number
) => {
  // Create an off-screen canvas
  const patternCanvas = document.createElement('canvas');
  const patternCtx = patternCanvas.getContext('2d');
  if (!patternCtx) return;

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
  const pattern = ctx.createPattern(patternCanvas, 'repeat');
  if (!pattern) return;
  ctx.fillStyle = pattern;

  // Draw the pattern across the entire canvas
  ctx.fillRect(0, 0, width, height);
};

// // Usage:
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// drawGrid(ctx, canvas.width, canvas.height, 50);
