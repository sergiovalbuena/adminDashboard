<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/logo.png" alt="logo" v-show="isDarkMode" />
      <img src="@/assets/logo-copy.png" alt="logo" v-show="!isDarkMode" />
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
.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}
.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}
.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.login {
  width: 400px;
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  padding: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  cursor: pointer;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  margin: 20px 0 40px 0;
}
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  text-decoration: none;
}
.light-link {
  color: rgba(255, 255, 255, 0.3);
}
.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
