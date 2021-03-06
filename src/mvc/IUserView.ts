/**
 * user view接口
 */
import IUserController from "./IUserController";

export default interface IUserView {
  /**
   * 用户逻辑控制层
   */
  userController: IUserController;

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