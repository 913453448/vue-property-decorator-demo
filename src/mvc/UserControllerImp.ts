import IUserController from "./IUserController";
import UserModelImp from "./UserModelImp";
import User from "./User";

/**
 * user逻辑处理层
 */
export default class UserControllerImp implements IUserController {
  private userModel = new UserModelImp();

  login(name: string, pwd: string): Promise<User> {
    return this.userModel.login(name, pwd);
  }
}