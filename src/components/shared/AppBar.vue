<template>
  <div class="app-bottom">
    <v-bottom-navigation :value="value" color="blue lighten-4" grow app>
      <router-link class="ma-auto" to="/">
        <v-btn>
          <span>Início</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <router-link class="ma-auto" to="/compra">
        <v-btn>
          <span>Pesquisar</span>

          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>

      <router-link class="ma-auto" to="/venda">
        <v-btn>
          <span>Venda</span>

          <v-icon>mdi-card-text-outline</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.app-bottom a {
  text-decoration: none;
}
</style>