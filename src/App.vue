<template>
  <v-app>

    <AppBar/>
    <CardItem/>
    <v-main>
      <router-view/>
    </v-main>
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
