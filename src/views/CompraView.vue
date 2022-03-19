<template>
  <v-container>
    <h4>Escolha seu Estado:</h4>
    <v-combobox
      clearable
      filled
      outlined
      solo
      v-on:change="filtrar($event)"
      v-model="select"
      v-bind:items="ufItems"
    ></v-combobox>
    <CardItem
      v-for="item in filtered"
      :key="item.id"
      :nome="item.nome"
      :id="item.id"
      :url="item.imagem"
      :preco="item.preco"
      :sabor="item.sabor"
      :local="item.local"
    />
  </v-container>
</template>

<script>
import CardItem from "../components/CardItem.vue";
export default {
  name: "CompraView",
  components: {
    CardItem,
  },
  data() {
    return {
      ufItems: [],
      ovo: [],
      filtered: [],
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.ovo = json;
        this.filtered = json;
        var aux = [];
        for (let i in json) {
          aux = json[i].local.endereco.split(" ");
          aux = aux[aux.length - 1];
          this.ufItems.push(aux);
        }
      });
  },
  methods: {
    filtrar(item) {
      this.filtered = [];
      // console.log(item);
      for (let i in this.ovo) {
        var aux = this.ovo[i].local.endereco.split(" ");
        var ufItem = aux[aux.length - 1];
        if (item !== null) {
          if (ufItem === item) {
            this.filtered.push(this.ovo[i]);
          }
        }
      }
      if (item === null) {
        this.filtered = this.ovo;
      }
      console.log(this.filtered);
    },
  },
};
</script>

<style scoped>
</style>