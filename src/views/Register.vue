<template>
<div>
  <div>
  <v-container></v-container>
  </div>
    <v-card
    class="mx-auto"
    max-width="800"
    tile
  >
  <div class="pa-5">
    <v-form     
    ref="form"
    v-model="valid"
    lazy-validation>
      
      <span class="title"> Formulaire d'inscription </span>
      <v-spacer></v-spacer>
      <span > S'inscrire en tant que : </span>
      <v-btn-toggle
        v-model="status"
      >

      <v-btn :color="active ? 'primary' : ''"  class="ml-16" key="client">
      Client
      </v-btn>
      <v-btn :color="active ? 'primary' : ''"  key="livreur">
      Livreur
      </v-btn>
      <v-btn :color="active ? 'primary' : ''"  key="restaurant" >
      Restaurateur
      </v-btn>

      </v-btn-toggle>

      <form @submit.prevent="submit">

      <v-text-field
      v-model="surname"
      :counter="20"
      :rules="nameRules"
      label="Nom"
      required
      ></v-text-field>

      <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Prénom"
      required
      ></v-text-field>

      <v-text-field
      v-model="email"
      :counter="50"
      :rules="emailRules"
      label="Email"
      required
      ></v-text-field>

      <v-text-field
      v-model="phoneNumber"
      :counter="12"
      :error-messages="errors"
      :rules="phoneNumberRules"
      label="Numéro de téléphone"
      required
      ></v-text-field>

      <v-text-field v-if="status === 2"
      v-model="siret"
      :counter="14"
      :error-messages="errors"
      :rules="siretRules"
      label="SIRET"
      required
      ></v-text-field>

      <v-text-field
      v-model="password"
      :value="myPass"
      :counter="20"
      :rules="passwordRules"
      label="Mot de passe"
      :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (value = !value)"
      :type="value ? 'password' : 'text'"
      ></v-text-field>

      <v-text-field
      v-model="confirmPassword"
      :value="myPass"
      :counter="20"
      :rules="confirmPasswordRules.concat(passwordConfirmationRule)" 
      label="Confirmation de mot de passe"
      :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (value = !value)"
      :type="value ? 'password' : 'text'"
      ></v-text-field>
      <div class="pt-5">
      <v-btn @click="reset" color="red" class="mr-4">
      Rénitialiser
      </v-btn>

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
        color="green"
      >
        Valider
      </v-btn>
      </div>
    </form>
    </v-form>
  </div>
    </v-card>
</div>
</template>


<script>
export default {
  name: 'Register',

  methods: {
      reset() {
        this.$refs.form.reset()
      },
      submit() {
        this.$refs.form.validate()
      }
  },

  computed: {
    passwordConfirmationRule() {
        return () => (this.password === this.confirmPassword) || 'Les mots de passes ne sont pas identiques'
    },
},
  data: () => ({
      surname: '',
      name: '',
      nameRules: [
        v => !!v || 'Ce champs est requis',
        v => (v && v.length <= 10) || 'Ce champs ne peut dépasser 10 caractères',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Le mail est requis',
        v => /.+@.+\..+/.test(v) || 'Le mail doit être valide',
      ],
      phoneNumber: '',
      phoneNumberRules : [
        v => !!v || 'Le numéro de téléphone est requis',
      ],
      siret: '',
      siretRules : [
        v => !!v || 'Le SIRET est requis',
      ],
      password: '',
      passwordRules : [
        v => !!v || "Mot de passe requis",
        v => ( 8 <= v.length) || 'Ce champs doit posséder au moins 8 caractères',
      ],
      confirmPasswordRules: [
        v => !!v || "Mot de passe requis"
        ],
      status:0,
      value: String,
  }),
}
</script>