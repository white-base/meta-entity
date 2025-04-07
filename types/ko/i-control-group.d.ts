/**
 * 그룹 제어 인터페이스 입니다.
 */
declare interface IGroupControl {

    /**
     * 병합합니다.
     */
    merge(...args);

    /**
     * 복사합니다.
     */
    copy(...args);
}

export default IGroupControl;
export { IGroupControl };