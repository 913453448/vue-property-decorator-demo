/**
 * user view接口
 */

export default interface IUserView {
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