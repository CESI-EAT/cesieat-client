<template>
  <div>
    <div>
      <v-container></v-container>
    </div>
    <v-card class="mx-auto" max-width="800" tile>
      <div class="pa-5">
        <v-form ref="form" lazy-validation>
          <span class="title"> Détails </span>
          <v-spacer></v-spacer>
          <v-divider></v-divider>
          <form @submit.prevent="submit">
            <div class="box-inner pt-4">
              <div class="row">
                <div class="col-6">
                  <v-text-field
                    label="Nom"
                    :value="user.lastname"
                    required
                    outlined
                  ></v-text-field>
                </div>
                <div class="col-6">
                  <v-text-field
                    label="Prénom"
                    :value="user.firstname"
                    required
                    outlined
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <v-text-field
                    label="Email"
                    :value="user.email"
                    required
                    outlined
                  ></v-text-field>
                </div>
                <div class="col-6">
                  <v-text-field
                    label="Numéro de téléphone"
                    :value="user.phoneNumber"
                    required
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>
            <div class="pt-2">
              <v-btn color="primary" class="mr-4"> Modifier </v-btn>
            </div>
          </form>
        </v-form>
      </div>
    </v-card>

    <v-card class="mx-auto mt-6" max-width="800" tile>
      <div class="pt-5 pl-5">
        <v-form ref="form" lazy-validation>
          <span class="title"> Lien de parrainage </span>
          <v-spacer></v-spacer>
          <v-divider></v-divider>

          <form @submit.prevent="submit">
            <div class="box-inner">
              <v-spacer class="pt-4"></v-spacer>
              <div class="row">
                <div class="col-6">
                  <v-text-field
                    label="Lien de parrainage"
                    outlined
                    readonly
                  ></v-text-field>
                </div>
                <div class="col-6 pt-5">
                  <v-btn elevation="2">Copier le lien</v-btn>
                </div>
              </div>
            </div>
          </form>
        </v-form>
      </div>
    </v-card>

    <v-card class="mx-auto pt-2 mt-10" max-width="800" tile>
      <div class="pa-5">
        <v-form ref="form" lazy-validation>
          <span class="title"> Mot de passe </span>
          <v-divider class="pb-4"></v-divider>
          <v-spacer></v-spacer>

          <form @submit.prevent="submit">
            <span
              >Pour modifier votre mot de passe, veuillez saisir votre mot de
              passe actuel pour confirmer votre identité.</span
            >
            <div class="row pt-4">
              <div class="col-6">
                <v-text-field
                  label="Mot de passe actuel"
                  required
                  outlined
                ></v-text-field>
              </div>
              <div class="col-6">
                <v-text-field
                  label="Nouveau mot de passe"
                  required
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div>
              <v-btn type="submit" color="primary" class="mr-4">
                Modifier
              </v-btn>
            </div>
          </form>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapState('auth', ['status', 'user']),
  },
  methods: {
    ...mapActions(['updateProfile']),
    submit() {
      this.updateProfile(this.user)
    },
    reset() {
      this.$router.push('/login')
    },
  },
}
</script>
