export declare type DataFormat = 'channelsFirst' | 'channelsLast';
export declare const VALID_DATA_FORMAT_VALUES: string[];
export declare function checkDataFormat(value?: string): void;
export declare type PaddingMode = 'valid' | 'same' | 'causal';
export declare const VALID_PADDING_MODE_VALUES: string[];
export declare function checkPaddingMode(value?: string): void;
export declare type PoolMode = 'max' | 'avg';
export declare const VALID_POOL_MODE_VALUES: string[];
export declare function checkPoolMode(value?: string): void;
export declare function nameScope<T>(name: string, fn: () => T): T;
export declare function getScopedTensorName(tensorName: string): string;
export declare function getUniqueTensorName(scopedName: string): string;
export declare function isValidTensorName(name: string): boolean;
