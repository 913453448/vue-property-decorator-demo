/**
 * user逻辑处理接口层
 */
import User from "./User";

export default interface IUserController {
  /**
   * 用户登录
   * @param {string} name
   * @param {string} pwd
   */
  login(name: string, pwd: string): Promise<User>;
}