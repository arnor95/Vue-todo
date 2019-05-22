<template>
    <nav>

        <v-snackbar top v-model="snackbar" :timeout="6000" color="success">
            <span>Awesome! you added a new project.</span>
            <v-btn flat color="white" @click="snackbar=false">Close</v-btn>
        </v-snackbar>

        <v-toolbar app dark class="light-blue darken-4">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y class="logged-in" style="display:none">
            <v-btn flat slot="activator" class="light-blue darken-4">
                <v-icon>expand_more</v-icon>
                <span>Menu</span>
            </v-btn>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-title>
                        {{link.text}}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-btn icon>
        <v-icon>accessible_forward</v-icon>
        </v-btn>

        <v-btn icon>
        <v-icon>insert_emoticon</v-icon>
        </v-btn>

        <v-btn flat class="light-blue darken-4 logged-in" @click="logout()" style="display:none">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
            </v-btn>
         <v-btn flat class="light-blue darken-4 logged-out" @click="googleSignIn()" style="display:none">
            <span>Sign In</span>
            <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
      <v-list>
        <v-list-tile avatar class="logged-in" style="display:none">
          <v-list-tile-avatar size=25 class="pr-3" id="googleAvatar">
            
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="displayName"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn class="mb-3 ml-5 logged-out" style="display:none" @click="googleSignIn()">Sign in with Google</v-btn>
      <v-flex class="mb-3 ml-5">
          <Popup @projectAdded="snackbar=true"/>
      </v-flex>

      <v-list class="pt-2">
        <v-divider></v-divider>

        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router :to="link.route"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    </nav>
</template>

<script>
import Popup from './Popup'
import firebase from 'firebase';
const admin = require ('firebase-admin');
const db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();

export default {
      data(){
        return {
            drawer:false,
            
            links: [
                {icon: 'dashboard', text:'Dashboard', route: '/'},
                {icon: 'folder', text:'My Projects', route: '/projects'},
                {icon: 'person', text:'Team', route: '/team'},
            ],
            snackbar:false,
        }
    },
    components:{Popup},
    methods:{
        googleSignIn() {
              const googleAvatar = document.querySelector('#googleAvatar');
              firebase.auth().signInWithPopup(provider).then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // The signed-in user info.
                var user = result.user;
                db.collection('users').doc(user.uid).set({
                email: user.email,
                phone: user.phoneNumber,
                avatar: user.photoURL,
                name: user.displayName
                })
                //Set user image
    
                // ...
                }).catch((err) => {
                // Handle Errors here.
                alert('oops' + err.message)
                // The email of the user's account used.
                // ...
            })
        },
      logout() {
      firebase.auth().signOut().then(() => {
        admin.auth().revokeRefreshTokens(firebase.auth().currentUser.uid)
        alert('user signed out');
      })},
    
        }

}
</script>
