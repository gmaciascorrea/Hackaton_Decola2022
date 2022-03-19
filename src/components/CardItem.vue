<template>
  <v-container>
    <v-card class="mx-auto" max-width="80vw">
      <v-img :src="url" height="220px"></v-img>
      <v-card-title>
        {{ nome }}
      </v-card-title>

      <v-card-subtitle>
        <div class="text-left">
          <v-card-text>
            <p><strong>Preço:</strong>{{ preco }}</p>
            <p><strong>Sabor:</strong>{{ sabor }}</p>
            <p><strong>Nome:</strong>{{ local.nome }}</p>
            <p><strong>Local:</strong>{{ local.endereco }}</p>
            <p><strong>CEP:</strong>{{ local.cep }}</p>
          </v-card-text>
        </div>
      </v-card-subtitle>
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
</style>
