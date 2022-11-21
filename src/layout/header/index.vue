<template>
  <header>
    <nav>
      <router-link
        v-for="item in routes"
        :key="item.path"
        class="header-nav-link nav-link"
        :to="item.path"
        >{{ item.name }}</router-link
      >
    </nav>

    <span class="header-svg fold-svg icon" @click="navVisible = true">
      <img src="@/assets/icon/menu.svg" alt="menu.svg" width="30" height="30" />
    </span>

    <div class="util-btn-box">
      <span class="header-svg icon" @click="emailVisible = true">
        <img
          src="@/assets/icon/email.svg"
          alt="email.svg"
          width="30"
          height="30"
        />
      </span>

      <span
        v-if="!store.state.isLogin"
        class="header-svg icon"
        @click="store.state.showLogin = true"
      >
        <img
          src="@/assets/icon/user.svg"
          alt="user.svg"
          width="30"
          height="30"
        />
      </span>
    </div>

    <teleport to="body">
      <div
        class="mask"
        :tabindex="-1"
        v-show="navVisible"
        @click="navVisible = false"
      >
        <nav class="small-nav">
          <router-link
            v-for="item in routes"
            :key="item.path"
            class="small-nav-link nav-link"
            :to="item.path"
            >{{ item.name }}
          </router-link>
        </nav>
      </div>
    </teleport>

    <Dialog :visible="emailVisible" @close="emailVisible = false">
      <template #body>
        <EmailBox></EmailBox>
      </template>
    </Dialog>

    <Dialog
      :visible="store.state.showLogin"
      @close="store.state.showLogin = false"
    >
      <template #body>
        <LoginBox></LoginBox>
      </template>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

import Dialog from "@/components/dialog/index.vue";
import LoginBox from "@/components/login-box/index.vue";
import EmailBox from "@/components/email-box/index.vue";

import { Route } from "@/types";

defineProps({
  routes: Array<Route>,
  default: () => []
})

const store = useStore();

const navVisible = ref(false);

const emailVisible = ref(false);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
