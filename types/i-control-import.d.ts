/**
 *Import control interface.
 */
 declare interface IImportControl {

    /**
     * Gets the target (read)
     */
    read(...args: any[]): void;
}

export default IImportControl;
export { IImportControl };