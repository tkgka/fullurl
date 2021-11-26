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
        <div class="label-text mb-5 text-2xl font-bold" v-text="return_value">
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
import url from "../assets/server_url";
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
    toggleimg: function () {
      var myImage = new Image();
      myImage.src = `${url.url}img/?url=${this.input_data}`;
      myImage.onload = () => {
        this.imageLink = myImage.src;
      };
      this.imageLink =
        "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";
    },
    check_URL() {
      this.input_data.match(pattern)
        ? (this.valid = true)
        : (this.valid = false);

      if (this.input_data !== "") {
        try {
          if (this.valid === true) {
            var tinyurl = this.input_data.split("://")[1];
          } else if (this.valid === false) {
            var tinyurl = this.input_data;
          }
          fullurl(tinyurl).then((val) => {
            val.data != ""
              ? ((this.return_value = val.data), this.toggleimg())
              : alert("URL 정보 확인에 실패 했습니다.");
          });
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