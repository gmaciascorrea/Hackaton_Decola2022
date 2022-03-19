<template>
  <div class="text-center">  
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Nome completo"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="12"
            label="Nome de usuário"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="numero"
            :rules="nameRules"
            label="Número"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="cep"
            :rules="nameRules"
            label="CEP"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
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
  <v-btn
      rounded
      color="primary"
      dark
    >
      Confirmar
    </v-btn>  
  </div>    
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      username: '',
      numero:'',
      cep:'',
      complemento:'',
      nameRules: [
        v => !!v || 'Campo obrigatório!',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>

<style scoped>

</style>