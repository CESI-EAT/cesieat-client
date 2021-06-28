<template>
  <v-app>
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

      <v-btn text color="base">
        <v-icon class="mr-2">mdi-login</v-icon>
        <span>Connexion</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
