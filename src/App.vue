<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";
import Main from "./components/main.vue";
import apollo_client from "./graphql/server_conn";
export default Vue.extend({
  name: "App",
  components: {
    Main,
  },
  created() {
    apollo_client(navigator.userAgentData.brands);
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
</style>
