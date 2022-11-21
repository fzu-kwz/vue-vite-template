<template>
  <div class="email-form">
    <CForm footer>
      <FormItem width="0">
        <CSelect
          v-model="adviceForm.title"
          style="width: 100%;"
          :options="adviceOptions"
          allow-clear
        ></CSelect>
      </FormItem>
      <FormItem width="0">
        <textarea
          name="comment"
          cols="30"
          rows="8"
          maxlength="100"
          v-model="adviceForm.advice"
          placeholder="Leave your valuable advice"
        ></textarea>
      </FormItem>
      <template v-slot:footer>
        <CButton type="primary" style="width: 100%;" @click="sendAdvice"
          >Submit</CButton
        >
      </template>
    </CForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import CForm from "@/components/c-form/index.vue";
import FormItem from "@/components/c-form/form-item/index.vue";
import CButton from "@/components/c-button/index.vue";
import CSelect from "@/components/c-select/index.vue";

import { createTip } from "@/utils/tip";
import { Advice, Option } from "@/types";
import { send } from "@/api/email";

const adviceOptions: Option[] = [
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
