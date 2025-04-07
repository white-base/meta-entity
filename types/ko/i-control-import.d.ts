/**
 *가져오기 제어 인터페이스 입니다.
 */
declare interface IImportControl {

    /**
     * 대상을 가져옵니다. (읽기)
     */
    read(...args);
}
export default IImportControl;
export { IImportControl };