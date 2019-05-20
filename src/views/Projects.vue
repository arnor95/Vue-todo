<template>
  <div class = 'projects'>
    <h1 class="subheading">Projects</h1>

    <v-container class="my-5">
       <v-expansion-panel>
         <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
           <template v-slot:header>
            <div>{{project.title}}</div>
            </template>
            <v-card>
              <v-card-text class="px-4">
                <div class="font-weight-bold">
                  {{project.due}}
                </div>
                <div>
                  {{project.content}}
                </div>
              </v-card-text>
            </v-card>
         </v-expansion-panel-content>
       </v-expansion-panel>
    </v-container>
  
  </div>
</template>

<script>
import db from '@/fb'
  export default {
        data() {
      return {
        projects: []
    }
  },
    computed:{
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Yoshi'
        })
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === 'added'){
            this.projects.push(
              {
                ...change.doc.data(),
                id: change.doc.id
              }
            )
          }
        })
      })
    },
    components: {
     
    }
  }
</script>