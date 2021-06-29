<template>
  <div>
    <v-overlay v-if="isFetchingUser">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-app v-if="!isFetchingUser">
      <v-app-bar app color="primary">
        <div class="d-flex justify-start">
          <v-img
            alt="CESI'EAT Logo"
            class="shrink mr-2"
            contain
            src="@/assets/cesieat_white_horizontal.png"
            height="60"
            position="left"
          />
        </div>

        <v-spacer></v-spacer>
        <v-btn v-if="$store.getters.isLoggedIn" to="/profile" text color="base">
          <v-icon class="mr-2">mdi-account</v-icon>
          <span>Profile</span>
        </v-btn>
        <v-btn
          v-if="$store.getters.isLoggedIn"
          @click="logout"
          text
          color="base"
        >
          <v-icon class="mr-2">mdi-logout</v-icon>
          <span>Déconnexion</span>
        </v-btn>
        <v-btn v-else text @click="goToLoginPage" color="base">
          <v-icon class="mr-2">mdi-login</v-icon>
          <span>Connexion</span>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
      <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn color="white" text rounded class="my-1" @click="goToHomePage">
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
import { requestMixin } from '@/mixins/requestMixin'

export default {
  name: 'App',
  mixins: [requestMixin],

  data: () => ({
    isFetchingUser: true,
  }),
  // eslint-disable-next-line prettier/prettier
  created: async function () {
    try {
      const res = await this.request(false, 'me', 'get')
      this.$store.commit('set_user', res.data)
    } catch (err) {
      console.log('error: ', err)
    }
    this.isFetchingUser = false
  },
  methods: {
    goToLoginPage() {
      this.$router.push('/login')
    },
    async logout() {
      try {
        await this.request(false, 'logout', 'post')
        this.$store.commit('logout')
      } catch (err) {
        console.log('error: ', err)
      }
      this.goToHome()
    },
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>
