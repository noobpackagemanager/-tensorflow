"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = [
    {
        'tfOpName': 'Abs',
        'dlOpName': 'abs',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Acos',
        'dlOpName': 'acos',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Asin',
        'dlOpName': 'asin',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Atan',
        'dlOpName': 'atan',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Atan2',
        'dlOpName': 'atan2',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'y', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Ceil',
        'dlOpName': 'ceil',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'ClipByValue',
        'dlOpName': 'clipByValue',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'clip_value_min',
                'dlParamName': 'clipValueMin',
                'type': 'number'
            },
            {
                'tfParamName': 'clip_value_max',
                'dlParamName': 'clipValueMax',
                'type': 'number'
            }
        ]
    },
    {
        'tfOpName': 'Cos',
        'dlOpName': 'cos',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Cosh',
        'dlOpName': 'cosh',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Elu',
        'dlOpName': 'elu',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Exp',
        'dlOpName': 'exp',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Floor',
        'dlOpName': 'floor',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Log',
        'dlOpName': 'log',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Neg',
        'dlOpName': 'neg',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Relu',
        'dlOpName': 'relu',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Relu6',
        'dlOpName': 'clipByValue',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            },
            { 'dlParamName': 'clipValueMin', 'type': 'number', 'defaultValue': 0 },
            { 'dlParamName': 'clipValueMax', 'type': 'number', 'defaultValue': 6 }
        ]
    },
    {
        'tfOpName': 'Selu',
        'dlOpName': 'selu',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Sigmoid',
        'dlOpName': 'sigmoid',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Sin',
        'dlOpName': 'sin',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Sinh',
        'dlOpName': 'sinh',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Sqrt',
        'dlOpName': 'sqrt',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Rsqrt',
        'dlOpName': 'rsqrt',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Square',
        'dlOpName': 'square',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Tan',
        'dlOpName': 'tan',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Tanh',
        'dlOpName': 'tanh',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Sign',
        'dlOpName': 'sign',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Round',
        'dlOpName': 'round',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Expm1',
        'dlOpName': 'expm1',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Log1p',
        'dlOpName': 'log1p',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Reciprocal',
        'dlOpName': 'reciprocal',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Reciprocal',
        'dlOpName': 'reciprocal',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Softplus',
        'dlOpName': 'softplus',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Asinh',
        'dlOpName': 'asinh',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Acosh',
        'dlOpName': 'acosh',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Atanh',
        'dlOpName': 'atanh',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Erf',
        'dlOpName': 'erf',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Prod',
        'dlOpName': 'prod',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axes', 'type': 'number[]' }, {
                'tfParamName': 'keep_dims',
                'dlParamName': 'keepDims',
                'type': 'bool',
                'notSupported': true
            },
            {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LeakyRelu',
        'dlOpName': 'leakyRelu',
        'category': 'basic_math',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'alpha',
                'dlParamName': 'alpha',
                'type': 'number',
                'defaultValue': 0.2
            },
            {
                'tfParamName': 'T',
                'dlParamName': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    }
];
//# sourceMappingURL=basic_math.js.map