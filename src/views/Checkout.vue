<template>
  <v-card>
    <template slot="progress">
      <v-progress-linear
        :loading="isCreating"
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>Panier</v-card-title>
    <v-card-subtitle>Wololo</v-card-subtitle>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-text-field label="Adresse" v-model="address" required></v-text-field>
      </v-row>
      <v-row align="center" class="mx-0">
        <v-text-field label="Ville" v-model="city" required></v-text-field>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" block @click="submitOrder">
        <v-icon class="mr-2">mdi-cart-check</v-icon>
        Commander
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    address: '',
    city: '',
  }),
  computed: {
    ...mapGetters('stores', ['store']),
    ...mapGetters('auth', ['user']),
    ...mapGetters('orders', ['isCreating']),
  },
  mounted() {
    this.address = this.user ? this.user.address : ''
    this.city = this.user ? this.user.city : ''
  },
  methods: {
    submitOrder() {
      const payload = {
        storeId: this.store._id,
        userId: this.user.id,
        products: this.cart,
        price: this.price,
        deliveryAddress: this.address,
      }
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
