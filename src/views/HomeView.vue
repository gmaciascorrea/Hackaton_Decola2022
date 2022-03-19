<template>
  <v-conteiner>
    <h2>Todos os Ovos</h2>
    <div v-for="ovo of ovos" :key="ovo.id">
      <v-card class="mx-auto" max-width="80vw">
    <v-img :src="ovo.imagem" :alt="ovo.id"
        height="50 vh"
    ></v-img>

    <v-card-title>
      {{ ovo.nome }}
    </v-card-title>

    <v-card-subtitle>
        <div class="text-left">
             <v-card-text>
               <p><strong>Preço:</strong>{{ ovo.preco }}</p>
               <p><strong>Sabor:</strong>{{ ovo.sabor }}</p>
               <p><strong>Local:</strong>{{ ovo.local.endereco }}</p>
        </v-card-text>

        </div>
      
    </v-card-subtitle>

  </v-card>

    </div>
  </v-conteiner>
</template>

<script>
  //import CardItem from '../components/shared/CardItem.vue'
  export default {    
    name: 'HomeView',
    components: {
      //CardItem
    },
    created() {
      fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then(retorno => retorno.json())
      .then(json => {
        this.ovos = json;
        console.log(this.ovos)
      })
    },
    data() {
      return {
        ovos: []
      }
    }

  }
</script>
