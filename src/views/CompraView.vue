<template>
  <v-container>
    <v-combobox
      clearable
      filled
      outlined
      solo
      v-on:change="filtrar($event)"
      v-model="select"
      v-bind:items="ufItems"
    ></v-combobox>
  </v-container>
</template>

<script>
export default {
  name: "CompraView",

  data() {
    return {
      ufItems: [],
      ovo: [],
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.ovo = json;
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
      var ufItem;
      var filteredOvo;
      for (let i in this.ovo) {
        ufItem = this.ovo[i].local.endereco.split(" ");
        ufItem = ufItem[ufItem.length - 1];
        if(ufItem == item){
          filteredOvo.push(this.ovo[i]);
          console.log('igual')
        }
      }
    },
  },
};
</script>

<style scoped>
</style>