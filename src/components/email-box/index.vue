<template>
  <div class="email-form">
    <KForm footer>
      <FormItem label-width="0">
        <KSelect
          v-model="adviceForm.title"
          style="width: 100%;"
          :options="adviceOptions"
          allow-clear
        ></KSelect>
      </FormItem>
      <FormItem label-width="0">
        <KInput
          type="textarea"
          cols="30"
          rows="6"
          maxlength="100"
          v-model="adviceForm.advice"
          placeholder="Leave your valuable advice"
        >
        </KInput>
      </FormItem>
      <FormItem label-width="0">
        <KButton type="primary" style="width: 100%;" @click="sendAdvice"
          >Submit</KButton
        >
      </FormItem>
    </KForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { KForm, FormItem, KButton, KSelect, KInput } from "k-vue3-comp";

import { createTip } from "@/utils/tip";
import { Advice, Option } from "@/types";
import { send } from "@/api/email";

const adviceOptions: Array<Option> = [
  {
    value: "Bug",
    name: "Bug",
  },
  {
    value: "Style",
    name: "Style",
  },
  {
    value: "Function",
    name: "Function",
  },
];

const adviceForm: Advice = reactive({
  title: "",
  advice: "",
});

const sendAdvice = () => {
  if (adviceForm.advice === "") {
    createTip("No advice here!");
    return;
  }
  send(adviceForm).then((res) => {
    if (res.code === 200) {
      createTip("Thank you for your valuable advice!");
      for (let key in adviceForm) {
        adviceForm[key] = "";
      }
    } else {
      createTip("Sorry for cannot leave your advice!");
    }
  });
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
