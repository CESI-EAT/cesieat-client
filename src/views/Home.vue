<template>
  <v-container fluid id="home">
    <v-row>
      <span :style="`color: ${$vuetify.theme.themes.light.accent}`"
        >Dégustez, savourez, tout en restant chez vous.</span
      >
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex" style="max-width: 400px">
          <v-text-field
            color="primary"
            prepend-inner-icon="mdi-magnify"
            solo
            placeholder="Rechercher un restaurant..."
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
#home {
  background-image: url('../assets/home_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
</style>
