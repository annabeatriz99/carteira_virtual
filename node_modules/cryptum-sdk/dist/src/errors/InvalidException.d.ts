export = InvalidException;
/**
 * Error used when a type is invalid.
 */
declare class InvalidException extends GenericException {
    constructor(message: any);
}
import { GenericException } from ".";
