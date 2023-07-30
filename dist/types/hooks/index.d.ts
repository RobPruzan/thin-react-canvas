import { ElementRef, RefObject } from 'react';
export declare const useCanvas: ({ camera, canvasRef, rotation, scale, effectDeps, effectFn, }: {
    effectFn: (ctx: CanvasRenderingContext2D) => void;
    effectDeps: any[];
    canvasRef: RefObject<ElementRef<'canvas'>>;
    camera: [number, number];
    scale: number;
    rotation: number;
}) => void;
