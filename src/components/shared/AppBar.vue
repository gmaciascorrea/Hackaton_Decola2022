<template>
    <div class ="App-bottom" >
    <v-app-bar app 
    bottom>
    <v-bottom-navigation color ="pink lighten-4" v-model="value">
    

    <router-link to ="/">
      <v-btn value="Home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link >
    
    <router-link to ="/compra">
      <v-btn value="Pesquisar">
        <span>Pesquisar</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </router-link>  
    
    <router-link to = "/venda">
      <v-btn value="carrinho">
      <span>Carrinho</span>
      <v-icon>mdi-cart</v-icon>
        
      </v-btn>

    </router-link>

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