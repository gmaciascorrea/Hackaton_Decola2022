<template>
  <v-conteiner>
    <h2>jdakdj</h2>
    <CardItem
    :ovos>
  </v-conteiner>
</template>

<script>
  import CardItem from '../components/shared/CardItem.vue'
  export default {    
    name: 'HomeView',
    components: {
      CardItem
    },
    created() {
      fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then(retorno => retorno.json())
      .then(json => {
        this.ovos = json;
      })
    },
    data() {
      return {
        ovos: []
      }
    }

  }
  
</script>
