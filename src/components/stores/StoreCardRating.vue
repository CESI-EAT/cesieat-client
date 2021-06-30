<template>
  <div>
    <div v-if="ratingCount > 0" class="d-flex">
      <v-icon
        v-for="(star, index) in stars"
        :key="`star_${index}`"
        color="primary"
        >{{ star }}</v-icon
      >
      <span class="text-grey ml-2"> ({{ ratingCount }}) </span>
    </div>
    <span v-else class="text-grey"> Aucun avis </span>
  </div>
</template>

<script>
export default {
  name: 'StoreCardRating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    stars() {
      const stars = []
      const integer = Math.floor(this.rating)
      const decimal = this.roundHalf(this.rating) - integer
      for (let i = 0; i < 5; i++) {
        if (i < integer) {
          stars.push('mdi-star')
        } else if (i === integer && decimal > 0) {
          stars.push('mdi-star-half-full')
        } else {
          stars.push('mdi-star-outline')
        }
      }
      return stars
    },
  },
  methods: {
    roundHalf(val) {
      return Math.round(val * 2) / 2
    },
  },
}
</script>
