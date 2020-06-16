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
import UserControllerImp from "./UserControllerImp";

@Component
class UserViewImp extends Vue{
  private userViewImp: UserControllerImp; //用户逻辑控制层
  name = ""; //用户名
  pwd = ""; //密码
  constructor() {
    super();
    this.userViewImp = new UserControllerImp();
  }

  /**
   * 去登录
   */
  onLogin() {
    this.userViewImp.login(this.name, this.pwd)
      .then((user) => {
        this.showMessage("欢迎你：" + user.name);
      }).catch((error) => {
      this.showMessage("登录失败-->" + error.message);
    });
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
