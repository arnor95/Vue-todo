<template>
    <nav>
        <v-toolbar app dark class="light-blue darken-4">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
        <v-icon>accessible_forward</v-icon>
        </v-btn>

        <v-btn icon>
        <v-icon>insert_emoticon</v-icon>
        </v-btn>

        <v-btn flat class="light-blue darken-4">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
      <v-list class="pa-3">
        <v-list-tile avatar>
          <v-list-tile-avatar size=25 class="pr-3">
            <img src="/avatar-5.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Yoshi</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

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
export default {
    data(){
        return {
            drawer:false,
            links: [
                {icon: 'dashboard', text:'Dashboard', route: '/'},
                {icon: 'folder', text:'My Projects', route: '/projects'},
                {icon: 'person', text:'Team', route: '/team'},
            ]
        }
    }
}
</script>
