<template>
  <v-card>
    <v-card-title>Panier</v-card-title>
    <v-card-subtitle>Wololo</v-card-subtitle>
    <v-card-text>Tu tu ruu</v-card-text>
    <v-card-actions>
      <v-btn color="primary" block>
        <v-icon class="mr-2">mdi-cart-check</v-icon>
        Commander
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove-product', id)
    },
    updateProduct(id, newQuantity) {
      this.$emit('update-product', { id, newQuantity })
    },
  },
}
</script>
