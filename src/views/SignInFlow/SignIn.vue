<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <NotificationSign v-if="hasText" v-bind:text="text" />
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
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="password"
          required
        />
        <button>Sign In</button>
      </form>
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
//import * as netlifyIdentityWidget from "netlify-identity-widget";
import { auth } from "@/main";
import NotificationSign from "@/components/NotificationSign.vue";

export default {
  name: "SignIn",
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: "",
    };
  },
  // data() {
  //   return {
  //     isDarkMode: this.$store.getters.isDarkMode,
  //   };
  // },
  components: {
    RequestAccount,
    ThemeSwitch,
    NotificationSign,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
    onSubmit() {
      //alert("submitted!");
      const email = this.email;
      const password = this.password;
      auth
        .login(email, password, true)
        .then(() => {
          //alert("Response: " + response);
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Error: " + err);
        });
    },
  },
  mounted() {
    //   netlifyIdentityWidget.open();
    const params = this.$route.params;

    if (params.useLoggedOut) {
      this.hasText = true;
      this.text = "You've logged out!";
    }
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
