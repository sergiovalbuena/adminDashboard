<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img
        src="@/assets/logo_blanco.png"
        alt="logo"
        v-show="isDarkMode"
        class="logo"
      />
      <img
        src="@/assets/logo_negro.png"
        alt="logo"
        v-show="!isDarkMode"
        class="logo"
      />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign In
      </h4>
      <input
        type="email"
        placeholder="Email"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <input
        type="password"
        placeholder="Password"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Forgot your password?
      </router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import "animate.css";
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "SignIn",
  // data() {
  //   return {
  //     isDarkMode: this.$store.getters.isDarkMode,
  //   };
  // },
  components: {
    RequestAccount,
    ThemeSwitch,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/globalStyles/colors.scss";
@import "@/globalStyles/typography.scss";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
.login {
  width: 400px;
}
.logo {
  width: 400px;
  margin: 60px 0;
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
}
</style>
