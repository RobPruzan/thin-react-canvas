import { mat2d, vec2 } from 'gl-matrix';

const getTranslationMatrix = (delta: [number, number]) => {
  const [dx, dy] = delta;
  const matrix = mat2d.create();
  mat2d.translate(matrix, matrix, vec2.fromValues(dx, dy));
  return matrix;
};

const getScaleMatrix = (scale: number, center: [number, number]) => {
  const [centerX, centerY] = center;
  const matrix = mat2d.create();
  mat2d.translate(matrix, matrix, vec2.fromValues(centerX, centerY));
  mat2d.scale(matrix, matrix, vec2.fromValues(scale, scale));
  mat2d.translate(matrix, matrix, vec2.fromValues(-centerX, -centerY));
  return matrix;
};

const getRotationMatrix = (angle: number, center: [number, number]) => {
  const [centerX, centerY] = center;
  const matrix = mat2d.create();
  mat2d.translate(matrix, matrix, vec2.fromValues(centerX, centerY));
  mat2d.rotate(matrix, matrix, angle);
  mat2d.translate(matrix, matrix, vec2.fromValues(-centerX, -centerY));
  return matrix;
};

const applyMatrixToContext = (ctx: CanvasRenderingContext2D, matrix: mat2d) => {
  ctx.transform(
    matrix[0],
    matrix[1],
    matrix[2],
    matrix[3],
    matrix[4],
    matrix[5]
  );
};

export const translateContext = (
  ctx: CanvasRenderingContext2D,
  delta: [number, number]
) => {
  const matrix = getTranslationMatrix(delta);

  applyMatrixToContext(ctx, matrix);
};

export const scaleContext = (
  ctx: CanvasRenderingContext2D,
  scale: number,
  center: [number, number]
) => {
  const matrix = getScaleMatrix(scale, center);
  applyMatrixToContext(ctx, matrix);
};

export const rotateContext = (
  ctx: CanvasRenderingContext2D,
  angle: number,
  center: [number, number]
) => {
  const matrix = getRotationMatrix(angle, center);
  applyMatrixToContext(ctx, matrix);
};
