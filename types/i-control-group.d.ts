/**
 * This is the group control interface.
 */
declare interface IGroupControl {

    /**
     * Merge.
     */
    merge(...args: any[]): unknown;

    /**
     * Copy.
     */
    copy(...args: any[]): unknown;
}

export default IGroupControl;
export { IGroupControl };