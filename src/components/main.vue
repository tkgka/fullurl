<template>
  <div>
    <h1>1</h1>
  </div>
</template>

<script>
import Vue from "vue";

import fullurl from "../assets/axios";

export default Vue.extend({
  name: "App",
  data() {
    return {
      Completed: "",
    };
  },
  created() {
    fullurl("https://tinyurl.com/m6jhybxx")
      .then((x) => x.status)
      .then(console.log("!!@#"));
  },
});
</script>
