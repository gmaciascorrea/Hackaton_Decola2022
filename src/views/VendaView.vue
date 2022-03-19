<template>
  <div class="text-center mb-8">
    <h2 class="text-h3 pa-10">Anuncie seus ovos de páscoa aqui</h2>
    <p></p>
    <v-form v-model="valid">
      <v-container class="pa-5 ma-auto">
        <v-row class="text-center">
        <h2 class="text-h6 ma-auto">Informações do ovo de páscoa</h2>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nome"
              :rules="nameRules"
              label="Nome"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="descricao"
              :rules="nameRules"
              :counter="12"
              label="Sabor"
              required
            ></v-text-field>
          </v-col>

          
          <v-col cols="12" md="4">
            <v-text-field
              v-model="preco"
              :counter="12"
              label="Preço"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-file-input show-size counter label="Foto"></v-file-input>
          </v-col>

          <h2 class="text-h6 ma-auto">Informações do local de venda</h2>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="nome"
              :rules="nameRules"
              label="Nome da Loja"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="endereco"
              label="Endereço"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="cep"
              label="CEP"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="complemento"
              :rules="nameRules"
              label="Complemento"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-btn rounded color="blue" dark class="ma-3"> Confirmar </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    nome: "",
    descricao: "",
    numero: "",
    cep: "",
    complemento: "",
    nameRules: [
      (v) => !!v || "Campo obrigatório!",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped>

</style>