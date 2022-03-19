<template>
  <v-container>
    <v-card class="ma-5" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="url">
        <v-card-title class="card-title">{{ nome }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        <p><strong>Preço: </strong>{{ "R$ " + preco }}</p>
      </v-card-subtitle>

      <v-card-text class="text--primary ">
        <div>{{ local.nome }}</div>

        <div>{{ local.endereco }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue lighten-4" text> Comprar </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { integer } from "vee-validate/dist/rules";
export default {
  name: "CardItem",
  props: {
    id: integer,
    url: String,
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
.card-title{
  color: #BBDEFB;
  text-shadow: 1px 1px black;
  background: rgba(255, 255, 255, 0.3);
}
</style>
