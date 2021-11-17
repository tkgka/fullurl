<template>
  <div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">URL을 입력하세요</span>
      </label>
      <div class="flex space-x-2">
        <input
          type="text"
          placeholder="ex) http://tinyurl.com/m6jhybxx"
          class="w-full input input-primary input-bordered label-text"
          v-model="input_data"
        />
        <button @click="check_URL()" class="btn btn-primary">go</button>
      </div>
      <div class="navbar text-neutral-content">
        <div class="flex-1 px-2 mx-2" v-text="return_value">
          <span class="text-lg font-bold"> daisyUI </span>
        </div>
      </div>
      <img :src="imageLink" alt="" />
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
      valid: false,
      input_data: "",
      return_value: "",
      imageLink: "",
    };
  },
  methods: {
    check_URL() {
      this.input_data.match(pattern)
        ? (this.valid = true)
        : (this.valid = false);

      if (this.input_data !== "") {
        try {
          if (this.valid === true) {
            this.input_data = this.input_data.split("://")[1];
          }
          fullurl(this.input_data).then((val) => {
            val.data != ""
              ? (this.return_value = val.data)
              : alert("URL 정보 확인에 실패 했습니다.");
          });
          this.imageLink=`https://serve.oozoo.site/img/?url=${this.input_data}`
        } catch (error) {
          // console.log(error);
          alert("내부적인 오류가 발생했어요.");
        }
      } else if (this.valid == false) {
        alert("잘못된 URL입니다.");
      }
    },
  },
});
</script>