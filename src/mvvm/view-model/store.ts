import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import User from "../User";
import UserModelImp from "../UserModelImp";

Vue.use(Vuex);
//创建一个用户业务处理实例
const userModelImp = new UserModelImp();
const store = new Vuex.Store({
  state: {
    id: "",
    name: "",
    pwd: "",
  },
  mutations: {
    updateUser(state, user: User) {
      state.id = user.id;
    }
  },
  actions: {
    /**
     * 登录
     * @param context
     * @returns {Promise<Error | never | User>}
     */
    login(context) {
      return userModelImp.login(this.state.name, this.state.pwd)
        .then((user) => {
          context.commit("updateUser", user);
          return "欢迎你，" + user.name;
        }).catch((error) => {
          return new Error("登录失败: " + error.message);
        });
    }
  }
} as StoreOptions<User>);
export default store;