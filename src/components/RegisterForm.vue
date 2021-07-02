<template>
  <div>
    <v-card class="mx-auto" max-width="800" tile :loading="isCreating">
      <template slot="progress">
        <v-progress-linear
          color="primary"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <div class="pa-5">
        <v-form ref="form" lazy-validation>
          <span class="title">Vous attendez quoi pour vous s'inscrire ?</span>
          <v-spacer></v-spacer>
          <span> S'inscrire en tant que : </span>
          <v-btn-toggle v-model="status">
            <v-btn class="ml-16" value="Consommateur"> Client </v-btn>
            <v-btn value="Livreur"> Livreur </v-btn>
            <v-btn value="Restaurateur"> Restaurateur </v-btn>
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
              :rules="phoneNumberRules"
              label="Numéro de téléphone"
              required
            ></v-text-field>

            <v-text-field
              v-if="status === 'Restaurateur'"
              v-model="siret"
              :counter="14"
              :rules="siretRules"
              label="SIRET"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :counter="20"
              :rules="passwordRules"
              label="Mot de passe"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (showPassword = !showPassword)"
              :type="!showPassword ? 'password' : 'text'"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :counter="20"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              label="Confirmation de mot de passe"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (showConfirmPassword = !showConfirmPassword)"
              :type="!showConfirmPassword ? 'password' : 'text'"
            ></v-text-field>
            <div class="pt-2">
              <span class="subtitle-2"> Vous avez déjà un compte ? </span>
              <v-btn text class="subtitle-2 pl-1" color="primary" to="/login">
                Se connecter
              </v-btn>
            </div>
            <div class="pt-5">
              <v-btn @click="reset" color="grey" class="mr-4">
                Rénitialiser
              </v-btn>

              <v-btn
                class="mr-4"
                type="submit"
                color="primary"
                :loading="isCreating"
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Register',
  data: () => ({
    roles: [],
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
      (v) => v.length <= 14 || "Le numéro de SIRET n'est pas assez long",
      (v) => v.length >= 14 || 'Le numéro de SIRET est trop long',
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
    status: 'Consommateur',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  }),
  computed: {
    ...mapGetters('auth', ['isCreating']),
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword ||
        'Les mots de passes ne sont pas identiques'
    },
    role() {
      return this.roles.find((r) => r.name === this.status)
    },
  },
  async mounted() {
    const { data: roles } = await request.get('roles')
    this.roles = roles
  },
  methods: {
    ...mapActions('auth', ['register']),
    reset() {
      this.$refs.form.reset()
    },
    async submit() {
      const payload = {
        email: this.email,
        lastname: this.surname,
        firstname: this.name,
        address: this.address,
        password: this.password,
        phoneNum: this.phoneNumber,
        roleId: this.role.id,
      }
      try {
        await this.register(payload)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
