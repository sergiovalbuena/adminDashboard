import { createStore } from "vuex";

//Inintal State
if (window.matchMedia("(prefers-color-scheme: dark").matches) {
  window.localStorage.setItem("IsDarkMode", "true");
}
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";
const state = {
  isDarkMode: userSelectedDarkMode,
};

//Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

//Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
};

//ACtiokns
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  //modules: {},
});
