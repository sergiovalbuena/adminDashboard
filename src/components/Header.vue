<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <a @click="onClick" href="">LogOut</a>
  </nav>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "MyHeader",
  methods: {
    onClick() {
      //alert("Logout!");
      const user = auth.currentUser();

      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: { useLoggedOut: true },
          });
        })
        .catch((error) => {
          alert("Error : " + error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
