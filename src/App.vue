<template>
  <div id="bg"
    :style="{
      'background-image': `linear-gradient(to right, ${gradient
        .map((color) => `${color}66`)
        .join(',')})`,
    }"
  >
    <div id="app">
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Main from "./components/main.vue";

export default Vue.extend({
  name: "App",
  components: {
    Main,
  },
  data() {
    return {
      gradient: [] as string[],
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
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 7%;
  margin-top: 0%;
}
#bg {
  width: 100vw;
  height: 100vh;
}
</style>
