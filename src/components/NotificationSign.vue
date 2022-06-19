<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div v-show="show" class="bubble">
      <div class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NotificationSign",
  data() {
    return {
      show: false,
    };
  },
  mouted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  props: {
    text: "",
  },
};
</script>

<style lang="scss" scoped>
@import "@/globalStyles/colors.scss";
@import "@/globalStyles/typography.scss";
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
  background-color: $blue;
}
.message {
  @include medium-text;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
