import User from "./User";

/**
 * user数据持久化接口层
 */
export default interface IUserModel {
  /**
   * 用户登录
   * @param {string} name
   * @param {string} pwd
   * @returns {Promise<User>}
   */
  login(name: string, pwd: string): Promise<User>
}