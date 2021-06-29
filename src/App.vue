<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex justify-start">
        <v-btn text color="transparent" @click="goToHomePage">
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

      <v-btn text color="base">
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
</template>

<script>
export default {
  name: 'App',

  data: () => ({}),
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
    goToConditionsPage() {
      this.$router.push('/conditions')
    },
    goToRGPDPage() {
      this.$router.push('/rgpd')
    },
  },
}
</script>
