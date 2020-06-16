<template>
    <div>
        用户名：<input name="name" v-model="name"><br>
        密码：<input name="pwd" v-model="pwd"><br>
        <button @click="onLogin">登录</button>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "../view/component";
import UserPresenterImp from "./UserPresenterImp";
import IUserView from "./IUserView";

@Component
class UserViewImp extends Vue implements IUserView{
  userPresenter: UserPresenterImp; //用户逻辑控制层
  name = ""; //用户名
  pwd = ""; //密码
  constructor() {
    super();
    this.userPresenter = new UserPresenterImp(this as IUserView);
  }

  /**
   * 去登录
   */
  onLogin() {
    this.userPresenter.login(this.name, this.pwd);
  }

  /**
   * 展示消息
   * @param {string} msg
   */
  showMessage(msg = "") {
    alert(msg);
  }
}

export default UserViewImp;
</script>
