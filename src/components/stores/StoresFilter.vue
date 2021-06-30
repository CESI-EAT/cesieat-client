<template>
  <v-form>
    <h5>Gamme de prix</h5>
    <v-rating
      v-model="currentFilter.priceRange"
      color="primary"
      empty-icon="mdi-circle-medium"
      full-icon="mdi-currency-eur"
      :length="4"
      hover
      @input="$emit('price-range-input', $event)"
    />
  </v-form>
</template>

<script>
export default {
  name: 'StoresFilter',
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.currentFilter = this.filter
  },
  data() {
    return {
      currentFilter: {
        priceRange: 4,
      },
    }
  },
  methods: {
    // call this by reference on mobile devices
    submit() {
      this.$emit('submit', this.currentFilter)
    },
  },
}
</script>
