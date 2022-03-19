<template>
  <v-card class="mx-auto" max-width="80vw">
    <v-img :src="imagem" :alt="ovo.id"
        height="50 vh"
    ></v-img>

    <v-card-title>
      {{ console.log('nome') }}
    </v-card-title>

    <v-card-subtitle>
        <div class="text-left">
             <v-card-text>
        
        </v-card-text>

        </div>
      
    </v-card-subtitle>

  </v-card>
</template>

<script>
  export default {
    name: 'CardItem',
    props: {
        nome: undefined,
        imagem: undefined,
    }
  }
</script>

<style scoped>

</style>

