<template>
  <v-card class="pr-0">
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
            <v-card-subtitle> - prix : {{ product.price }} € </v-card-subtitle>
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
      <h2>Total : {{ total }} €</h2>
    </v-card-text>
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
  computed: {
    total() {
      let sum = 0
      this.cart.forEach((product) => {
        sum += product.price * product.quantity
      })
      return sum
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
