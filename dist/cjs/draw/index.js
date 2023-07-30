"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateContext = exports.scaleContext = exports.translateContext = void 0;
var gl_matrix_1 = require("gl-matrix");
var getTranslationMatrix = function (delta) {
    var dx = delta[0], dy = delta[1];
    var matrix = gl_matrix_1.mat2d.create();
    gl_matrix_1.mat2d.translate(matrix, matrix, gl_matrix_1.vec2.fromValues(dx, dy));
    return matrix;
};
var getScaleMatrix = function (scale, center) {
    var centerX = center[0], centerY = center[1];
    var matrix = gl_matrix_1.mat2d.create();
    gl_matrix_1.mat2d.translate(matrix, matrix, gl_matrix_1.vec2.fromValues(centerX, centerY));
    gl_matrix_1.mat2d.scale(matrix, matrix, gl_matrix_1.vec2.fromValues(scale, scale));
    gl_matrix_1.mat2d.translate(matrix, matrix, gl_matrix_1.vec2.fromValues(-centerX, -centerY));
    return matrix;
};
var getRotationMatrix = function (angle, center) {
    var centerX = center[0], centerY = center[1];
    var matrix = gl_matrix_1.mat2d.create();
    gl_matrix_1.mat2d.translate(matrix, matrix, gl_matrix_1.vec2.fromValues(centerX, centerY));
    gl_matrix_1.mat2d.rotate(matrix, matrix, angle);
    gl_matrix_1.mat2d.translate(matrix, matrix, gl_matrix_1.vec2.fromValues(-centerX, -centerY));
    return matrix;
};
var applyMatrixToContext = function (ctx, matrix) {
    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
};
var translateContext = function (ctx, delta) {
    var matrix = getTranslationMatrix(delta);
    applyMatrixToContext(ctx, matrix);
};
exports.translateContext = translateContext;
var scaleContext = function (ctx, scale, center) {
    var matrix = getScaleMatrix(scale, center);
    applyMatrixToContext(ctx, matrix);
};
exports.scaleContext = scaleContext;
var rotateContext = function (ctx, angle, center) {
    var matrix = getRotationMatrix(angle, center);
    applyMatrixToContext(ctx, matrix);
};
exports.rotateContext = rotateContext;
//# sourceMappingURL=index.js.map