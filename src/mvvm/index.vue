<template>
    <div>
        用户名：<input name="name" v-model="$store.state.name"><br>
        密码：<input name="pwd" v-model="$store.state.pwd"><br>
        <button @click="onLogin">登录</button>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "../view/component";
import IUserView from "./IUserView";
@Component
class UserViewImp extends Vue implements IUserView {
  /**
   * 去登录
   */
  onLogin() {
    this.$store.dispatch('login').then((msg:string)=>{
        this.showMessage(msg);
    }).catch((error:Error)=>{
      this.showMessage(error.message);
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
