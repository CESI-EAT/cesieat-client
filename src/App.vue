<template>
  <div>
    <v-overlay v-if="status === 'loading'">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-app v-else>
      <v-app-bar app color="primary">
        <div class="d-flex justify-start">
          <v-btn text color="transparent" @click="goToHome">
            <v-img
              alt="CESI'EAT Logo"
              class="shrink mr-2"
              contain
              src="@/assets/cesieat_white_horizontal.png"
              height="60"
              position="left"
            />
          </v-btn>
        </div>

        <v-spacer></v-spacer>
        <v-btn v-if="isLoggedIn" to="/profile" text color="base">
          <v-icon class="mr-2">mdi-account</v-icon>
          <span>Profil</span>
        </v-btn>
        <v-btn v-if="isLoggedIn" @click="logout" text color="base">
          <v-icon class="mr-2">mdi-logout</v-icon>
          <span>Déconnexion</span>
        </v-btn>
        <v-btn v-else text @click="goToLoginPage" color="base">
          <v-icon class="mr-2">mdi-login</v-icon>
          <span>Connexion</span>
        </v-btn>
      </v-app-bar>

      <v-main style="min-height: 100vh">
        <router-view />
      </v-main>
      <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn color="white" text rounded class="my-1" @click="goToHome">
            Home
          </v-btn>
          <v-btn
            color="white"
            text
            rounded
            class="my-1"
            @click="goToConditionsPage"
          >
            Mentions légales
          </v-btn>
          <v-btn color="white" text rounded class="my-1" @click="goToRGPDPage">
            RGPD
          </v-btn>
          <v-col class="primary py-1 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} — <strong>CESI'EAT</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { requestMixin } from '@/mixins/requestMixin'

export default {
  name: 'App',
  mixins: [requestMixin],
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    ...mapState({
      status: (state) => state.auth.status,
    }),
  },
  created() {
    this.$store.dispatch('auth/getUser')
  },
  methods: {
    goToLoginPage() {
      this.$router.push('/login')
    },
    async logout() {
      this.$store.dispatch('auth/logout')
      this.goToHome()
    },
    goToHome() {
      this.$router.push('/')
    },
    goToConditionsPage() {
      this.$router.push('/conditions')
    },
    goToRGPDPage() {
      this.$router.push('/gdpr')
    },
  },
}
</script>
