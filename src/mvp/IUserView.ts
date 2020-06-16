/**
 * user view接口
 */
import IUserPresenter from "./IUserPresenter";

export default interface IUserView {
  /**
   * 用户逻辑控制层
   */
  userPresenter: IUserPresenter;

  /**
   * 登录响应
   */
  onLogin(): void;

  /**
   * 展示消息
   * @param {string} msg
   */
  showMessage(msg: string): void;
}