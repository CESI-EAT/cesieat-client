<template>
  <v-card tile :loading="isCartValidating">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title><h3>Panier</h3></v-card-title>
    <v-card-text>
      <v-row
        v-for="product in cart"
        :key="'product_' + product.id"
        class="flex-nowrap"
      >
        <v-col>
          <v-card
            color="White"
            height="55"
            width="100%"
            class="ma-1 pl-2"
            elevation="0"
          >
            <v-card-title
              class="pa-1 pb-3 text-truncate"
              style="display: inline-block"
            >
              - {{ product.name }}
            </v-card-title>
            <v-card-subtitle>
              Prix : {{ product.price.toFixed(2) }} €
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="shrink">
          <div class="d-flex">
            <v-btn
              class="ma-2"
              max-width="25"
              min-width="20"
              @click="updateProduct(product.id, product.quantity - 1)"
              ><v-icon>mdi-minus</v-icon></v-btn
            >
            <v-text-field
              v-model="product.quantity"
              solo
              dense
              readonly
              reverse
              style="width: 50px"
              class="ma-2"
            >
            </v-text-field>
            <v-btn
              class="ma-2"
              max-width="25"
              min-width="20"
              @click="updateProduct(product.id, product.quantity + 1)"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
      <h2>Total : {{ price.toFixed(2) }} €</h2>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" block @click="submitCart" v-if="isLoggedIn">
        <v-icon class="mr-2">mdi-cart-check</v-icon>
        Commander
      </v-btn>
      <v-btn color="primary" block to="/login" v-else>
        <v-icon class="mr-2">mdi-login</v-icon>
        Se connecter
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
    ...mapGetters('auth', ['user', 'isLoggedIn']),
    ...mapGetters('orders', ['isCartValidating']),
    price() {
      let sum = 0
      this.cart.forEach((product) => {
        sum += product.price * product.quantity
      })
      return sum
    },
  },
  methods: {
    ...mapActions('orders', ['validCart']),
    async submitCart() {
      const payload = {
        madeBy: this.store._id,
        userId: this.user.id,
        products: this.cart,
        price: this.price,
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
