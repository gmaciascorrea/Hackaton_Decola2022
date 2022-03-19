<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
    
    <AppBar/>

  </v-app>
  
</template>
./components/CardItem.vue
<script>
import AppBar from './components/shared/AppBar.vue'

export default {
  name: 'App',

  components: {
    AppBar,
  }
}
</script>
