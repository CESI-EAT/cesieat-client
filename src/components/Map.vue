<template>
  <v-container>
    <v-card
      ><iframe
        width="100%"
        height="600"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/directions
  ?key=AIzaSyDxlv2xjtDEbsOXK_ncWeqjvgI62N6PPu4
  &origin=14+bis+rue+fringon
  &destination=bayonne
  &avoid=tolls|highways"
      >
      </iframe>
      <div class="row mt-1 justify-center">
        <div class="col-2 text-center">
          <div>
            <span>Commande acceptée</span>
          </div>
          <div>
            <v-icon x-large> mdi-clipboard-list </v-icon>
          </div>
        </div>
        <div class="col-1"><span> -------------- </span></div>
        <div class="col-2 text-center">
          <div>
            <span>Commande prête</span>
          </div>
          <div>
            <v-icon x-large> mdi-food </v-icon>
          </div>
        </div>
        <div class="col-1"><span> -------------- </span></div>

        <div class="col-2 text-center">
          <div>
            <span>Coursier en chemin</span>
          </div>
          <div>
            <v-icon x-large> mdi-run-fast </v-icon>
          </div>
        </div>
        <div class="col-1"><span> -------------- </span></div>
        <div class="col-2 text-center">
          <div>
            <span>Commande livré</span>
          </div>
          <div>
            <v-icon x-large> mdi-bell-ring </v-icon>
          </div>
        </div>
      </div></v-card
    >
  </v-container>
</template>

<script>
export default {
  name: 'Map',
  methods: {},
  data: () => ({}),
}
</script>
