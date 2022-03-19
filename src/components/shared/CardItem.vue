<template>
  <v-card class="mx-auto" max-width="80vw">
    <v-img :src="ovo.imagem" :alt="ovo.id"
        height="50 vh"
    ></v-img>

    <v-card-title>
      {{ ovos.nome }}
    </v-card-title>

    <v-card-subtitle>
        <div class="text-left">
            <p>Sabor: {{ ovos.sabor }}</p>
            <p>Preço: {{ ovos.preco }}</p>
            <p>Loja: {{ ovos.local.nome }}</p>
        </div>
      
    </v-card-subtitle>

  </v-card>
</template>

<script>
  export default {
    name: 'CardItem',
    props: {
        ovos: {
            type: Array,
            required: true
        }
    }
  }
</script>

<style scoped>

</style>