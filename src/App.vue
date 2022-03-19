<template>
  <v-app>

    
    <CardItem/>
    
    
    <v-main>
      <router-view/>
    </v-main>
    <AppBar/>
  </v-app>
  
</template>

<script>


import CardItem from './components/shared/CardItem'
import AppBar from './components/shared/AppBar'
export default {
  name: 'App',
  components: {
    CardItem,
    AppBar
  },
  data: () => ({
    //
  }),
};
</script>
