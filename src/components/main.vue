<template>
  <div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">URL을 입력하세요</span>
      </label>
      <div class="flex space-x-2">
        <input
          type="text"
          placeholder="Search"
          class="w-full input input-primary input-bordered label-text"
          v-model="input_data"
        />
        <button @click="check_URL()" class="btn btn-primary">go</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import fullurl from "../assets/axios";

/* eslint-disable */
const pattern =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export default Vue.extend({
  name: "App",
  data() {
    return {
      valid: "",
      input_data: "",
    };
  },
  created() {
    try {
      fullurl("https://tinyurl.com/m6jhybxx").then((val) => {
        console.log(val.data);
      });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    check_URL() {
      this.input_data.match(pattern)
        ? (this.valid = true)
        : (this.valid = false);

      if (this.valid == true) {
        try {
          fullurl(this.input_data).then((val) => {
            console.log(val.data);
          });
        } catch (error) {
          console.log(error);
        }
      } else if (this.valid == false) {
        alert("잘못된 URL입니다.");
      }
    },
  },
});
</script>