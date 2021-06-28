<template>
  <div>
    <div>
      <v-container></v-container>
    </div>
    <v-card class="mx-auto" max-width="800" tile>
      <div class="pa-5">
        <v-form ref="form" v-model="valid" lazy-validation v-if="status === 0">
          <span class="title"> Connectez-vous : </span>
          <v-spacer></v-spacer>
          <form @submit.prevent="submit">
            <v-text-field
              v-model="email"
              :counter="50"
              :rules="emailRules"
              label="Email"
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

            <div class="pt-5">
              <v-btn
                class="mr-2"
                type="submit"
                :disabled="invalid"
                color="primary"
              >
                Connexion
              </v-btn>
              <v-btn class="ma-2" text color="primary" @click="status = -1">
                Mots de passe oublié
              </v-btn>
            </div>
          </form>
        </v-form>

        <v-form ref="form" v-model="valid" lazy-validation v-if="status === -1">
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
            :counter="50"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <div class="pt-5">
            <v-btn
              class="mr-2"
              type="submit"
              :disabled="invalid"
              color="primary"
            >
              Réinitialiser
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    submit() {
      this.$refs.form.validate()
    },
  },
  data: () => ({
    email: '',
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
