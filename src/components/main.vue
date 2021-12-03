<template>
  <div>
    <div class="form-control">
      <div id="main">
        <label class="label">
          <th @click="myFilter()" class="initial">
            <span class="label-text">image_{{ image_show }}</span>
          </th>
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
            <span class="text-lg font-bold"> </span>
          </div>
        </div>
      </div>

      <div
        class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
        style="background-color: #777777"
      >
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img :src="imageLink" alt="" v-if="image_show" />
          </figure>
          <div class="max-w-md card-body">
            <h2 class="card-title">Glass</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="card-actions">
              <button class="btn glass rounded-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import fullurl from "../assets/axios";
import url from "../assets/server_url";
import reg from "../assets/reg_pattern";

export default Vue.extend({
  name: "Main",
  data() {
    return {
      gradient: [] as string[],
      valid: false,
      input_data: "",
      return_value: "",
      imageLink: "",
      tinyurl: "",
      image_show: false,
    };
  },
  created() {
    const defaultColorsNumber = 2;

    for (let i = 0; i < defaultColorsNumber; i += 1) {
      this.gradient.push(this.randomHexColor());
    }
  },
  methods: {
    randomHexColor(): string {
      return `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;
    },
    myFilter: function () {
      this.image_show = !this.image_show;
      this.tinyurl !== "" &&
      this.imageLink !== `${url.url}img/?url=${this.tinyurl}`
        ? this.toggleimg(`https://${this.tinyurl}`)
        : null;
    },
    async verify_URL(input_data) {
      input_data.match(reg.pattern)
        ? (this.valid = true)
        : (this.valid = false);
      try {
        if (this.valid === true) {
          input_data = input_data.split("://")[1];
        }
        if (input_data === this.tinyurl) {
          return null;
        } else {
          return input_data;
        }
      } catch (error) {
        alert("내부적인 오류가 발생했어요.");
      }
    },
    toggleimg: function (tinyurl) {
      var myImage = new Image();
      myImage.src = `${url.url}img/?url=${tinyurl}`;
      myImage.onload = () => {
        this.imageLink = myImage.src;
      };
      this.imageLink =
        "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";
    },
    check_URL() {
      this.verify_URL(this.input_data).then((val) => {
        if (val !== null) {
          this.tinyurl = val;
        } else if (val === null) {
          return;
        }
        if (this.input_data !== "") {
          fullurl(this.tinyurl).then((val) => {
            val.data !== "" && val.data !== "error"
              ? ((this.return_value = String(val.data)),
                this.image_show === true
                  ? this.toggleimg(`https://${this.tinyurl}`)
                  : null)
              : alert("URL 정보 확인에 실패 했습니다.");
          });
        }
      });
    },
  },
});
</script>

<style scoped>
#main {
  margin-top: 5%;
}
</style>