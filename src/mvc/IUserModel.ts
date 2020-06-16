import User from "./User";

/**
 * user数据持久化接口层
 */
export default interface IUserModel {
  login(name: string, pwd: string): Promise<User>
}