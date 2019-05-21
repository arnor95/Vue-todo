import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase';

Vue.config.productionTip = false;
const setupUI = (user) => {
  const loggedInLinks = document.querySelectorAll('.logged-in');
  const loggedOutLinks = document.querySelectorAll('.logged-out');

  if (user){
      //toggle ui
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else{
    loggedOutLinks.forEach(item => item.style.display = 'block');
    loggedInLinks.forEach(item => item.style.display = 'none');
  }
}

new Vue({
  router,
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
          setupUI(user)
      }
      else{
          setupUI();
      }
  })
  },
  render: h => h(App)
}).$mount("#app");
