<template>
  <v-conteiner>
    <h2 class="text-center">Todos os ovos</h2>
    <v-divide></v-divide>
    
    <CardItem
      v-for="item in ovos" :key="item.id"
    :nome="item.nome"
    :id="item.id"
    :url="item.imagem"
    :preco="item.preco"
    :sabor="item.sabor"
    :local="item.local"
    />
  </v-conteiner>
</template>

<script>
import CardItem from '../components/CardItem.vue'
export default {
  name: "HomeView",
  components: {
    CardItem
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((retorno) => retorno.json())
      .then((json) => {
        this.ovos = json;
      });
  },
  data() {
    return {
      ovos: [],
    };
  },
};
</script>
