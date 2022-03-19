<template>
  <v-app>

    <CardItem/>
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import CardItem from './components/shared/CardItem.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
