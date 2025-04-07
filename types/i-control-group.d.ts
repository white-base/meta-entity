/**
 * This is the group control interface.
 */
declare interface IGroupControl {

    /**
     * Merge.
     */
    merge(...args);

    /**
     * Copy.
     */
    copy(...args);
}

export default IGroupControl;
export { IGroupControl };