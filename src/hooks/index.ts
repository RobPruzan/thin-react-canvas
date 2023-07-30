import { ElementRef, RefObject, useEffect } from 'react';

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
  useEffect(() => {
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
