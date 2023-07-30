import { ElementRef, RefObject, useEffect, useRef } from 'react';
import { Draw, Geometry } from '..';

export const useCanvas = ({
  camera,
  canvasRef,
  rotation,
  scale,
  effectDeps,
  effectFn,
}: {
  effectFn: (ctx: CanvasRenderingContext2D) => void;
  effectDeps: any[];
  canvasRef: RefObject<ElementRef<'canvas'>>;
  camera: [number, number];
  scale: number;
  rotation: number;
}) => {
  // const previousMousePosRef = useRef<[number, number] >([0,0]);
  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext('2d');

    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save the original context state
    ctx.save();

    // Apply the transformations
    Draw.translateContext(ctx, camera);
    Draw.scaleContext(ctx, scale, camera);
    Draw.rotateContext(ctx, rotation, camera);

    // Draw the grid over a larger area than the canvas to ensure it covers the whole visible area
    // You might need to adjust the size of the grid (third and fourth parameters) depending on the scale and camera position
    Geometry.grid(ctx, camera, scale, canvas.width * 2, canvas.height * 2, 50);

    // Draw the rest of your elements
    effectFn(ctx);

    // Restore the context state
    ctx.restore();
  }, effectDeps);
};
