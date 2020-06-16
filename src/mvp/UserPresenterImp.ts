import IUserPresenter from "./IUserPresenter";
import UserModelImp from "./UserModelImp";
import IUserView from "./IUserView";

/**
 * user逻辑处理层
 */
export default class UserPresenterImp implements IUserPresenter {
  private userModelImp = new UserModelImp();
  private userViewImp: IUserView;

  constructor(view: IUserView) {
    this.userViewImp = view;
  }

  login(name: string, pwd: string) {
    this.userModelImp.login(name, pwd).then((user) => {
      this.userViewImp.showMessage("欢迎你：" + user.name);
    }).catch((error) => {
      this.userViewImp.showMessage("登录失败-->" + error.message);
    });
  }
}