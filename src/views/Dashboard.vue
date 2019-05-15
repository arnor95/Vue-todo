<template>
  <div class ='dashboard'>
    <h1 class="subheading">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
        <v-btn small flat color="gray" @click="sortBy('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">project</span>
          <v-icon right small>swap_vert</v-icon>
        </v-btn>
        <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
        <v-btn small flat color="gray" @click="sortBy('person')" slot="activator">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">person</span>
          <v-icon right small>swap_vert</v-icon>
        </v-btn>
        <span>Sort projects by person name</span>      
        </v-tooltip>
      </v-layout>

        <v-card class="pa-3" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs12 md6>
              <div class="caption">
                Project title
              </div>
              <div>{{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption">
                Person
              </div>
              <div>
                {{project.person}}
              </div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption">
                Due by
              </div>
              <div>
                {{project.due}}
              </div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="right">
                <v-chip small :class="`${project.status} white--text caption my-2`">
                  {{project.status}}
                </v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
    </v-container>
  </div>
</template>

<script>
  import db from '@/fb'
  export default {
    data() {
      return {
        sorted:false,
        projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods:{
    sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
  }
</script>

<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>
