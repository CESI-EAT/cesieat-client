<template>
  <v-card class="mx-auto" max-width="800" tile :loading="isLoading">
    <div class="pa-5">
      <v-form ref="form" lazy-validation v-if="status === 0">
        <span class="title"> Connectez-vous : </span>
        <v-spacer></v-spacer>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
          ></v-text-field>
          <v-alert v-if="this.errors" type="error" class="mt-6">
            Votre identifiant ou votre mot de passe est incorrect. Veuillez
            revérifier vos informations.</v-alert
          >
          <div class="pt-2">
            <span class="subtitle-2"> Vous n'avez pas de compte ? </span>
            <v-btn
              text
              class="subtitle-2 pl-1"
              color="primary"
              @click="goToRegister"
            >
              S'inscrire
            </v-btn>
          </div>
          <div class="pt-5">
            <v-btn
              class="mr-2"
              type="submit"
              color="primary"
              :loading="isLoading"
            >
              Connexion
            </v-btn>
            <v-btn class="ma-2" text color="primary" @click="status = -1">
              Mots de passe oublié
            </v-btn>
          </div>
        </form>
      </v-form>

      <v-form ref="form" lazy-validation v-if="status === -1">
        <div>
          <v-btn color="primary" outlined @click="status = 0" class="pl-2">
            <v-icon class="mr-2">mdi-chevron-left</v-icon>
            <span>Retour</span>
          </v-btn>
          <v-spacer class="mb-4"></v-spacer>
          <span class="title"> Réinitialiser votre mot de passe: </span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            Pour réinitialiser votre mot de passe, nous devons vous envoyer un
            e-mail.
          </span>
        </div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>

        <div class="pt-5">
          <v-btn class="mr-2" type="submit" :disabled="invalid" color="primary">
            Réinitialiser
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { request } from '../utils/request'

export default {
  name: 'LoginForm',
  computed: {
    ...mapGetters('auth', 'isLoading'),
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    goToHome() {
      this.$router.push('/')
    },
    goToRegister() {
      this.$router.push('/register')
    },
    async submit() {
      const res = await request
        .post('login', { email: this.email, password: this.password })
        .catch(() => this.wrongCredentials())
      if (res && res.data && res.data.success) {
        this.$store.dispatch('auth/getUser')
        this.goToHome()
      } else {
        console.log('mauvais mdp')
      }
    },
    wrongCredentials() {
      this.errors = true
    },
  },
  data: () => ({
    email: '',
    errors: false,
    emailRules: [
      (v) => !!v || 'Le mail est requis',
      (v) =>
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          v
        ) || 'Le mail doit être valide',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Mot de passe requis',
      (v) =>
        /^[A-Za-z0-9_#?!@$%^&*~+-[\]{}()]*$/.test(v) || 'Caractères interdit',
    ],
    value: String,
    status: 0,
  }),
}
</script>
