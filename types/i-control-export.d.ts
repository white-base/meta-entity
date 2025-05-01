/**
 *  Export control interface.
 */
declare interface IExportControl {

    /**
     * Export target (write)
     */
    write(): void;
}

export default IExportControl;
export { IExportControl };