<template>
  <v-container>
    {{ nome }}
    {{ id }}
    {{ img }}
    {{ preco }}
    {{ sabor }}
  </v-container>
</template>

<script>
import { integer } from "vee-validate/dist/rules";
export default {
  name: "CardItem",
  props: {
    id: integer,
    imagem: String,
    local: {
      cep: String,
      endereco: String,
      id: integer,
      nome: String,
    },
    nome: String,
    preco: String,
    sabor: String,
  },
};
</script>

<style scoped>
</style>
