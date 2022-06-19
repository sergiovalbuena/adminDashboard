<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href=""
          class="card card-1"
          :class="{ 'light-card': isDarkMode, 'dark-card': !isDarkMode }"
        >
          <img
            src="@/assets/logo.png"
            alt=""
            class="card-header"
            :class="{ 'light-header': isDarkMode, 'dark-mode': !isDarkMode }"
          />
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Messagin app for all team comunication
          </p></a
        >
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href=""
          class="card card-2"
          :class="{ 'light-card': isDarkMode, 'dark-card': !isDarkMode }"
        >
          <img src="@/assets/logo.png" alt="" class="card-header" />
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Messagin app for all team comunication
          </p></a
        >
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href=""
          class="card card-3"
          :class="{ 'light-card': isDarkMode, 'dark-card': !isDarkMode }"
        >
          <img src="@/assets/logo.png" alt="" class="card-header" />
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Messagin app for all team comunication
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href=""
          class="card card-4"
          :class="{ 'light-card': isDarkMode, 'dark-card': !isDarkMode }"
        >
          <img src="@/assets/logo.png" alt="" class="card-header" />
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Messagin app for all team comunication
          </p></a
        >
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href=""
          class="card card-5"
          :class="{ 'light-card': isDarkMode, 'dark-card': !isDarkMode }"
        >
          <img src="@/assets/logo.png" alt="" class="card-header" />
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Messagin app for all team comunication
          </p></a
        >
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamView",
  computed: {
    isDarkMpde() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/globalStyles/colors.scss";
@import "@/globalStyles/typography.scss";
.container {
  margin-left: 25px;
}
h2 {
  @include heading-2;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex;
  align-items: space-even;
}
.card {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  background: red;
  margin: 20px;
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
.card-1 {
  animation-delay: 1s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 0.1s;
}
.card-4 {
  animation-delay: 0.5s;
}
.card-5 {
  animation-delay: 2s;
}
.card-header {
  width: 80%;
}
h3 {
  @include heading-3;
  margin-bottom: 16px;
}
p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
.light-header {
  background: $light-gray;
}
.dark-header {
  background: #283049;
}
</style>
