<template>
  <v-container fluid class="pd-0">
    <iframe
      width="100%"
      :height="height"
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
  </v-container>
</template>

<script>
export default {
  name: 'Map',
  props: {
    height: {
      type: Number,
      default: 600,
    },
  },
  methods: {},
  data: () => ({}),
}
</script>
