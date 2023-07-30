import { mat2d, vec2 } from 'gl-matrix';
var getTranslationMatrix = function (delta) {
    var dx = delta[0], dy = delta[1];
    var matrix = mat2d.create();
    mat2d.translate(matrix, matrix, vec2.fromValues(dx, dy));
    return matrix;
};
var getScaleMatrix = function (scale, center) {
    var centerX = center[0], centerY = center[1];
    var matrix = mat2d.create();
    mat2d.translate(matrix, matrix, vec2.fromValues(centerX, centerY));
    mat2d.scale(matrix, matrix, vec2.fromValues(scale, scale));
    mat2d.translate(matrix, matrix, vec2.fromValues(-centerX, -centerY));
    return matrix;
};
var getRotationMatrix = function (angle, center) {
    var centerX = center[0], centerY = center[1];
    var matrix = mat2d.create();
    mat2d.translate(matrix, matrix, vec2.fromValues(centerX, centerY));
    mat2d.rotate(matrix, matrix, angle);
    mat2d.translate(matrix, matrix, vec2.fromValues(-centerX, -centerY));
    return matrix;
};
var applyMatrixToContext = function (ctx, matrix) {
    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
};
export var translateContext = function (ctx, delta) {
    var matrix = getTranslationMatrix(delta);
    applyMatrixToContext(ctx, matrix);
};
export var scaleContext = function (ctx, scale, center) {
    var matrix = getScaleMatrix(scale, center);
    applyMatrixToContext(ctx, matrix);
};
export var rotateContext = function (ctx, angle, center) {
    var matrix = getRotationMatrix(angle, center);
    applyMatrixToContext(ctx, matrix);
};
//# sourceMappingURL=index.js.map