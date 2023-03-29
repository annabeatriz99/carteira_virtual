export = InvalidTypeException;
/**
 * Error used when an type is invalid.
 */
declare class InvalidTypeException extends Error {
    constructor(paramName: any, paramType: any);
}
