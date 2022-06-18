<template>
  <div class="home">
    <MyHeader />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyHeader from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MyHeader,
  },
};
</script>
