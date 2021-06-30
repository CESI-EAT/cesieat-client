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
                    name="lastname"
                    v-model="user.lastname"
                    required
                    outlined
                  ></v-text-field>
                </div>
                <div class="col-6">
                  <v-text-field
                    label="Prénom"
                    name="firstname"
                    v-model="user.firstname"
                    required
                    outlined
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <v-text-field
                    label="Email"
                    name="email"
                    v-model="user.email"
                    required
                    outlined
                  ></v-text-field>
                </div>
                <div class="col-6">
                  <v-text-field
                    label="Numéro de téléphone"
                    name="phone"
                    v-model="user.phoneNum"
                    required
                    outlined
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <v-text-field
                    label="Adresse"
                    v-model="user.address"
                    required
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>
            <div class="pt-2">
              <v-btn
                type="submit"
                color="primary"
                class="mr-4"
                :loading="isUpdating"
              >
                <span>Modifier</span>
              </v-btn>
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

          <form @submit.prevent="submitNewPassword">
            <span
              >Pour modifier votre mot de passe, veuillez saisir votre mot de
              passe actuel pour confirmer votre identité.</span
            >
            <div class="row pt-4">
              <div class="col-6">
                <v-text-field
                  label="Mot de passe actuel"
                  v-model="currentPassword"
                  required
                  outlined
                  :append-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="
                    () => (showCurrentPassword = !showCurrentPassword)
                  "
                  :type="showCurrentPassword ? 'password' : 'text'"
                ></v-text-field>
              </div>
              <div class="col-6">
                <v-text-field
                  label="Nouveau mot de passe"
                  v-model="newPassword"
                  required
                  outlined
                  :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (showNewPassword = !showNewPassword)"
                  :type="showNewPassword ? 'password' : 'text'"
                ></v-text-field>
              </div>
            </div>
            <div>
              <v-btn
                type="submit"
                color="primary"
                class="mr-4"
                :loading="isResetingPassword"
              >
                <span>Modifier</span>
              </v-btn>
            </div>
          </form>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data: () => ({
    currentPassword: '',
    newPassword: '',
    showNewPassword: true,
    showCurrentPassword: true,
  }),
  computed: {
    ...mapGetters('auth', ['user', 'isUpdating', 'isResetingPassword']),
  },
  methods: {
    ...mapActions('auth', ['updateProfile', 'changePassword']),
    submit() {
      this.updateProfile(this.user)
    },
    submitNewPassword() {
      this.changePassword({
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
      })
    },
    reset() {
      this.$router.push('/login')
    },
  },
}
</script>
