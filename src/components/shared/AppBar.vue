<template>
    <div color = "purple" class ="App-bottom" >
    <v-app-bar color="yellow lighten-4" app bottom>
    <v-bottom-navigation border:none background-color ="yellow lighten-4" color="pink lighten-4" v-model="value">
    

    
      <v-btn background color="yellow lighten-4" class="button" value="Home">
        <span>Home</span>
        <router-link to ="/">
        <v-icon>mdi-home</v-icon>
        </router-link >
      </v-btn>
    
    
    
        <v-btn background color="yellow lighten-4" class="button" value="Pesquisar">
        <span>Pesquisar</span>
        <router-link to ="/compra">
         <v-icon > mdi-magnify</v-icon>
        </router-link>
        </v-btn>
     
    
    
      <v-btn background color="yellow lighten-4" class="button" value="carrinho">
      <span>Cadastro</span>
      <router-link class="router" to = "/venda">
      <v-icon>mdi-card-text-outline</v-icon>
       </router-link> 
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
 .App-bottom a {
    text-decoration: none ;
   }
  
  
  

</style>