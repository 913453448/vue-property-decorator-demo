import User from "./User";
import IUserModel from "./IUserModel";

/**
 * user数据持久化实现层
 */
export default class UserModelImp implements IUserModel {
  /**
   * 用户登录
   * @param {string} name
   * @param {string} pwd
   * @returns {Promise<User>}
   */
  login(name: string, pwd: string): Promise<User> {
    return new Promise((resolve, reject) => {
      if ("123456" === pwd) {
        const user = new User();
        user.id = "1000";
        user.name = name;
        user.pwd = pwd;
        resolve(user);
      } else {
        reject(new Error("密码错误"));
      }
    });
  }
};