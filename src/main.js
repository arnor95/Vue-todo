import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase';

Vue.config.productionTip = false;
const setupUI = (user) => {
  const loggedInLinks = document.querySelectorAll('.logged-in');
  const loggedOutLinks = document.querySelectorAll('.logged-out');
  const googleAvatar = document.querySelector('#googleAvatar');
  const displayName = document.querySelector('.displayName');
  const db = firebase.firestore();

  if (user){
      //toggle ui
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');

        db.collection('users').doc(user.uid).get().then(doc => {
        const userName = doc.data().name;
        const html = `
        <img src="${doc.data().avatar}" style="height:50px; width:50px; border-radius:50%"></img>
        `;
        googleAvatar.innerHTML = html;
        displayName.innerHTML = userName;
         })
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
  methods:{
 
  },
  render: h => h(App)
}).$mount("#app");
