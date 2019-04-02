"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var jasmine_util_1 = require("../jasmine_util");
var test_util_1 = require("../test_util");
jasmine_util_1.describeWithFlags('transpose', test_util_1.ALL_ENVS, function () {
    it('of scalar is no-op', function () {
        var a = tf.scalar(3);
        test_util_1.expectArraysClose(tf.transpose(a), [3]);
    });
    it('of 1D is no-op', function () {
        var a = tf.tensor1d([1, 2, 3]);
        test_util_1.expectArraysClose(tf.transpose(a), [1, 2, 3]);
    });
    it('of scalar with perm of incorrect rank throws error', function () {
        var a = tf.scalar(3);
        var perm = [0];
        expect(function () { return tf.transpose(a, perm); }).toThrowError();
    });
    it('of 1d with perm out of bounds throws error', function () {
        var a = tf.tensor1d([1, 2, 3]);
        var perm = [1];
        expect(function () { return tf.transpose(a, perm); }).toThrowError();
    });
    it('of 1d with perm incorrect rank throws error', function () {
        var a = tf.tensor1d([1, 2, 3]);
        var perm = [0, 0];
        expect(function () { return tf.transpose(a, perm); }).toThrowError();
    });
    it('2D (no change)', function () {
        var t = tf.tensor2d([1, 11, 2, 22, 3, 33, 4, 44], [2, 4]);
        var t2 = tf.transpose(t, [0, 1]);
        expect(t2.shape).toEqual(t.shape);
        test_util_1.expectArraysClose(t2, t);
    });
    it('2D (transpose)', function () {
        var t = tf.tensor2d([1, 11, 2, 22, 3, 33, 4, 44], [2, 4]);
        var t2 = tf.transpose(t, [1, 0]);
        expect(t2.shape).toEqual([4, 2]);
        test_util_1.expectArraysClose(t2, [1, 3, 11, 33, 2, 4, 22, 44]);
    });
    it('3D [r, c, d] => [d, r, c]', function () {
        var t = tf.tensor3d([1, 11, 2, 22, 3, 33, 4, 44], [2, 2, 2]);
        var t2 = tf.transpose(t, [2, 0, 1]);
        expect(t2.shape).toEqual([2, 2, 2]);
        test_util_1.expectArraysClose(t2, [1, 2, 3, 4, 11, 22, 33, 44]);
    });
    it('3D [r, c, d] => [d, c, r]', function () {
        var t = tf.tensor3d([1, 11, 2, 22, 3, 33, 4, 44], [2, 2, 2]);
        var t2 = tf.transpose(t, [2, 1, 0]);
        expect(t2.shape).toEqual([2, 2, 2]);
        test_util_1.expectArraysClose(t2, [1, 3, 2, 4, 11, 33, 22, 44]);
    });
    it('5D [r, c, d, e, f] => [r, c, d, f, e]', function () {
        var t = tf.tensor5d(new Array(32).fill(0).map(function (x, i) { return i + 1; }), [2, 2, 2, 2, 2]);
        var t2 = tf.transpose(t, [0, 1, 2, 4, 3]);
        expect(t2.shape).toEqual([2, 2, 2, 2, 2]);
        test_util_1.expectArraysClose(t2, [
            1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12, 13, 15, 14, 16,
            17, 19, 18, 20, 21, 23, 22, 24, 25, 27, 26, 28, 29, 31, 30, 32
        ]);
    });
    it('5D [r, c, d, e, f] => [c, r, d, e, f]', function () {
        var t = tf.tensor5d(new Array(32).fill(0).map(function (x, i) { return i + 1; }), [2, 2, 2, 2, 2]);
        var t2 = tf.transpose(t, [1, 0, 2, 3, 4]);
        expect(t2.shape).toEqual([2, 2, 2, 2, 2]);
        test_util_1.expectArraysClose(t2, [
            1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24,
            9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 31, 32
        ]);
    });
    it('6D [r, c, d, e, f] => [r, c, d, f, e]', function () {
        var t = tf.tensor6d(new Array(64).fill(0).map(function (x, i) { return i + 1; }), [2, 2, 2, 2, 2, 2]);
        var t2 = tf.transpose(t, [0, 1, 2, 3, 5, 4]);
        expect(t2.shape).toEqual([2, 2, 2, 2, 2, 2]);
        test_util_1.expectArraysClose(t2, [
            1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12, 13, 15, 14, 16,
            17, 19, 18, 20, 21, 23, 22, 24, 25, 27, 26, 28, 29, 31, 30, 32,
            33, 35, 34, 36, 37, 39, 38, 40, 41, 43, 42, 44, 45, 47, 46, 48,
            49, 51, 50, 52, 53, 55, 54, 56, 57, 59, 58, 60, 61, 63, 62, 64
        ]);
    });
    it('6D [r, c, d, e, f, g] => [c, r, d, e, f, g]', function () {
        var t = tf.tensor6d(new Array(64).fill(0).map(function (x, i) { return i + 1; }), [2, 2, 2, 2, 2, 2]);
        var t2 = tf.transpose(t, [1, 0, 2, 3, 4, 5]);
        expect(t2.shape).toEqual([2, 2, 2, 2, 2, 2]);
        test_util_1.expectArraysClose(t2, [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
            49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64
        ]);
    });
    it('gradient 3D [r, c, d] => [d, c, r]', function () {
        var t = tf.tensor3d([1, 11, 2, 22, 3, 33, 4, 44], [2, 2, 2]);
        var perm = [2, 1, 0];
        var dy = tf.tensor3d([111, 211, 121, 221, 112, 212, 122, 222], [2, 2, 2]);
        var dt = tf.grad(function (t) { return t.transpose(perm); })(t, dy);
        expect(dt.shape).toEqual(t.shape);
        expect(dt.dtype).toEqual('float32');
        test_util_1.expectArraysClose(dt, [111, 112, 121, 122, 211, 212, 221, 222]);
    });
    it('throws when passed a non-tensor', function () {
        expect(function () { return tf.transpose({}); })
            .toThrowError(/Argument 'x' passed to 'transpose' must be a Tensor/);
    });
    it('accepts a tensor-like object', function () {
        var t = [[1, 11, 2, 22], [3, 33, 4, 44]];
        var res = tf.transpose(t, [1, 0]);
        expect(res.shape).toEqual([4, 2]);
        test_util_1.expectArraysClose(res, [1, 3, 11, 33, 2, 4, 22, 44]);
    });
});
//# sourceMappingURL=transpose_test.js.map