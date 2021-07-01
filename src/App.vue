<template>
  <div>
    <v-overlay v-if="isLoading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-app v-else>
      <app-header></app-header>
      <v-main style="min-height: 100vh">
        <router-view />
      </v-main>

      <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn color="white" text rounded class="my-1" @click="goToHome">
            Accueil
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
import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: { 'app-header': Header },
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'user', 'isLoading']),
  },
  created() {
    this.$store.dispatch('auth/getUser')
    console.log('API_URL', process.env, process.env.NODE_ENV)
  },
  methods: {
    goToLoginPage() {
      this.$router.push('/login')
    },
    goToOrders() {
      this.$router.push('/userhistory')
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
