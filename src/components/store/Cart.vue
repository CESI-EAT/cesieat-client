<template>
  <v-card tile :loading="isCartValidating" class="mx-auto">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>Panier</v-card-title>
    <v-card-subtitle>Wololo</v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary" block @click="submitCart">
        <v-icon class="mr-2">mdi-cart-check</v-icon>
        Commander
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters('stores', ['store']),
    ...mapGetters('auth', ['user']),
    ...mapGetters('orders', ['isCartValidating']),
  },
  methods: {
    ...mapActions('orders', ['validCart']),
    async submitCart() {
      const payload = {
        storeId: this.store._id,
        userId: this.user.id,
        products: this.cart,
        price: 22,
      }
      await this.validCart(payload)
      this.$router.push('/payment')
    },
    removeProduct(id) {
      this.$emit('remove-product', id)
    },
    updateProduct(id, newQuantity) {
      this.$emit('update-product', { id, newQuantity })
    },
  },
}
</script>
