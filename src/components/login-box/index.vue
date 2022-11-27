<template>
  <div class="login-form">
    <KForm footer>
      <FormItem label-text="username" width="120">
        <KInput maxlength="10" v-model="loginForm.username"></KInput>
      </FormItem>
      <FormItem label-text="password" width="120">
        <KInput
          type="password"
          maxlength="10"
          v-model="loginForm.password"
          allow-view
        ></KInput>
      </FormItem>
      <FormItem width="120">
        <KButton type="primary" style="width: 100%;" @click="login"
          >Login</KButton
        >
      </FormItem>
    </KForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

import { KForm, FormItem, KInput, KButton } from "k-vue3-comp";

import { createTip } from "@/utils/tip";
import { getUser } from "@/api/user";
import { LoginForm } from "@/types";

const store = useStore();

const loginForm: LoginForm = reactive({
  username: "",
  password: "",
});

const login = () => {
  for (let key in loginForm) {
    if (loginForm[key] === "") {
      createTip(`No ${key} here!`);
      return;
    }
  }
  getUser(loginForm).then((res) => {
    if (res.data) {
      sessionStorage.setItem("login", "true");
      store.state.isLogin = true;
      store.state.showLogin = false;
      createTip(`Welcome ${res.data.username}!`);
    } else {
      createTip("Login failed!");
    }
  });
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
