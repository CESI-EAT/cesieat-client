<template>
  <div>
    <v-card class="mx-auto" max-width="800" tile>
      <div class="pa-5">
        <v-form ref="form" lazy-validation>
          <span class="title"> Formulaire d'inscription </span>
          <v-spacer></v-spacer>
          <span> S'inscrire en tant que : </span>
          <v-btn-toggle v-model="status">
            <v-btn :color="active ? 'primary' : ''" class="ml-16" key="client">
              Client
            </v-btn>
            <v-btn :color="active ? 'primary' : ''" key="livreur">
              Livreur
            </v-btn>
            <v-btn :color="active ? 'primary' : ''" key="restaurant">
              Restaurateur
            </v-btn>
          </v-btn-toggle>

          <form @submit.prevent="submit">
            <div class="row mt-1">
              <div class="col-6">
                <v-text-field
                  v-model="surname"
                  :counter="20"
                  :rules="nameRules"
                  label="Nom"
                  required
                ></v-text-field>
              </div>
              <div class="col-6">
                <v-text-field
                  v-model="name"
                  :counter="20"
                  :rules="nameRules"
                  label="Prénom"
                  required
                ></v-text-field>
              </div>
            </div>
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

            <v-text-field
              v-if="status === 2"
              v-model="siret"
              :counter="14"
              :error-messages="errors"
              :rules="siretRules"
              label="SIRET"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :counter="20"
              :rules="passwordRules"
              label="Mot de passe"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (showPassword = !showPassword)"
              :type="showPassword ? 'password' : 'text'"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :counter="20"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              label="Confirmation de mot de passe"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (showConfirmPassword = !showConfirmPassword)"
              :type="showConfirmPassword ? 'password' : 'text'"
            ></v-text-field>

            <div class="pt-5">
              <v-btn @click="reset" color="grey" class="mr-4">
                Rénitialiser
              </v-btn>

              <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
                color="primary"
              >
                S'inscrire
              </v-btn>
            </div>
          </form>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { request } from '@/utils/request'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  methods: {
    ...mapActions('auth', ['register']),
    reset() {
      this.$refs.form.reset()
    },
    goToHome() {
      this.$router.push('/')
    },
    async submit() {
      const payload = {
        email: this.email,
        lastname: this.surname,
        firstname: this.name,
        address: this.address,
        password: this.password,
        phone_number: this.phoneNumber,
        roleId: 1,
      }
      try {
        await this.register(payload)
        this.goToHome()
      } catch (err) {
        console.log(err)
      }
    },
  },

  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword ||
        'Les mots de passes ne sont pas identiques'
    },
  },
  data: () => ({
    surname: '',
    name: '',
    nameRules: [
      (v) => !!v || 'Ce champs est requis',
      (v) =>
        (v && v.length <= 10) || 'Ce champs ne peut dépasser 10 caractères',
      (v) =>
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
          v
        ) || 'Le champs doit être valide',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'Le mail est requis',
      (v) =>
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          v
        ) || 'Le mail doit être valide',
    ],
    phoneNumber: '',
    phoneNumberRules: [
      (v) => !!v || 'Le numéro de téléphone est requis',
      (v) =>
        /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(v) ||
        'Le numéro de téléphone est invalide',
    ],
    siret: '',
    siretRules: [
      (v) => !!v || 'Le SIRET est requis',
      (v) => v.length === 14 || "Le numéro de SIRET n'est pas assez long",
      (v) => /^[0-9]+$/.test(v) || 'SIRET invalide',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Mot de passe requis',
      (v) => 8 <= v.length || 'Ce champs doit posséder au moins 8 caractères',
      (v) =>
        /^[A-Za-z0-9_#?!@$%^&*~+-[\]{}()]*$/.test(v) || 'Mot de passe invalide',
    ],
    confirmPasswordRules: [(v) => !!v || 'Mot de passe requis'],
    status: 0,
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  }),
}
</script>
