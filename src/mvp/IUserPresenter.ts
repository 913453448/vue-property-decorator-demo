/**
 * user逻辑处理接口层
 */
export default interface IUserPresenter {
  /**
   * 用户登录
   * @param {string} name
   * @param {string} pwd
   */
  login(name: string, pwd: string):void;
}