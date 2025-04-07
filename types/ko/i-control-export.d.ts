/**
 *  내보내기 제어 인터페이스 입니다.
 */
declare interface IExportControl {

    /**
     * 대상을 내보냅니다. (쓰기)
     */
    write();
}

export default IExportControl;
export { IExportControl };