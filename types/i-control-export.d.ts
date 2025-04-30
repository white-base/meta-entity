/**
 *  Export control interface.
 */
declare interface IExportControl {

    /**
     * Export target (write)
     */
    write(): unknown;
}

export default IExportControl;
export { IExportControl };