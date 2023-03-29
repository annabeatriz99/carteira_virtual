export = NotCanMountException;
/**
 * Error used when an an entity not can mount an object using data provided.
 */
declare class NotCanMountException extends Error {
    constructor(entityName: any);
}
