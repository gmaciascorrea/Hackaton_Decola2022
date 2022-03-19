<template>
  <v-card class="mx-auto" max-width="80vw">
    <v-img :src="ovo.imagem" :alt="ovo.id"
        height="200px"
    ></v-img>

    <v-card-title>
      {{ ovo.nome }}
    </v-card-title>

    <v-card-subtitle>
      {{ ovo.sabor }}
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
    }),
  }
</script>

<style scoped>

</style>