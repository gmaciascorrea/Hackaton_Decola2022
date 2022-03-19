<template>
    <div class ="App-bottom" >
    <v-app-bar app 
    bottom>
    <v-bottom-navigation color ="pink lighten-4" v-model="value">
    <v-btn value="Home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="Pesquisar">
      <span>Pesquisar</span>
      <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
      </v-list-item-icon>
    </v-btn>

    <v-btn value="Carrinho">
      <span>Carrinho</span>

      <v-list-item-icon>
          <v-icon>mdi-cart</v-icon>
      </v-list-item-icon>
    

    </v-btn>
  </v-bottom-navigation>
  </v-app-bar>
  </div>
</template>

<script>
export default {
    name: 'AppBar',
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>