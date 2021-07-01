<template>
  <div>
    <v-btn
      class="previous-button"
      large
      color="white"
      text
      @click="$router.push('/stores')"
    >
      <v-icon class="mr-2">mdi-chevron-left</v-icon>Retour
    </v-btn>
    <v-parallax v-if="store" :src="store.image" :height="220" />
    <v-container fluid v-if="store">
      <v-row>
        <v-col>
          <h1>{{ store.name }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="8">
          <v-container>
            <v-row>
              <v-col
                v-for="(product, index) in store.products"
                :key="`product_${index}`"
                sm="12"
                md="6"
                lg="4"
              >
                <product :product="product" @add-product="addProduct($event)" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col sm="12" md="4">
          <cart
            class="sticky-card"
            :cart="cart"
            @remove-product="removeProduct($event)"
            @update-product="updateProduct($event)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { request } from '@/utils/request'
import Product from '@/components/store/Product'
import Cart from '@/components/store/Cart'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Store',
  components: {
    Product,
    Cart,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    this.findStore(this.id)
  },
  data() {
    return {
      cart: [],
    }
  },
  computed: {
    ...mapGetters('stores', ['store', 'products', 'categories', 'isLoading']),
    products() {
      return this.store.products
    },
  },
  methods: {
    ...mapActions('stores', ['findStore']),
    addProduct(id) {
      // looks in the cart if the product has already been added
      const referenceIndex = this.getProductIndex(id)
      if (referenceIndex >= 0) {
        // if the product is already in the cart, update the value
        this.cart[referenceIndex].quantity += 1
      } else {
        // if the product is not in the cart, add it
        const productToAdd = this.products.find((e) => e.id === id)
        this.cart.push({
          ...productToAdd,
          quantity: 1,
        })
      }
    },
    removeProduct(id) {
      const productIndexToRemove = this.getProductIndex(id)
      if (productIndexToRemove >= 0) {
        this.cart.splice(productIndexToRemove, 1)
      }
    },
    updateProduct({ id, newQuantity }) {
      if (newQuantity <= 0) {
        this.removeProduct(id)
      } else {
        const productIndexToUpdate = this.getProductIndex(id)
        if (productIndexToUpdate >= 0) {
          this.cart[productIndexToUpdate].quantity = newQuantity
        }
      }
    },
    getProductIndex(id) {
      return this.cart.findIndex((e) => e.id === id)
    },
  },
}
</script>

<style scoped>
.previous-button {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
}
.sticky-card {
  top: 100px;
  position: sticky;
  padding-right: 10%;
}
</style>
