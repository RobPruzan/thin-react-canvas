export type Coordinate = [number, number];
export type SimpleRectangle = {
    c1: Coordinate;
    c2: Coordinate;
};
export type ExtendFn = (ctx: CanvasRenderingContext2D) => void;
