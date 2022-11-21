<template>
  <div class="login-form">
    <CForm footer>
      <FormItem label-text="username" width="120">
        <CInput v-model="loginForm.username"></CInput>
      </FormItem>
      <FormItem label-text="password" width="120">
        <CInput
          type="password"
          v-model="loginForm.password"
          @keyup.enter="login"
        ></CInput>
      </FormItem>
      <template v-slot:footer>
        <CButton type="primary" style="width: 100%;" @click="login"
          >Login</CButton
        >
      </template>
    </CForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

import CForm from "@/components/c-form/index.vue";
import FormItem from "@/components/c-form/form-item/index.vue";
import CInput from "@/components/c-input/index.vue";
import CButton from "@/components/c-button/index.vue";

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
