<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <v-btn width="100%" color="primary" @click="submit">
      <v-icon class="mr-2">mdi-cart-check</v-icon> Commander</v-btn
    >
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe'
export default {
  name: 'StripeButton',
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      'pk_test_51J7zuAEw5XsHJ2DaTyvD3qWQB6DcsEL7TmyiOKTuKlcLYJYO1lX8R3jZWl8HHxvzXCgTaEfmBG6QuEmlx0jMdDFL003pxmSi8Y'
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1J85r4Ew5XsHJ2Dab4T2OeQH',
          quantity: 1,
        },
      ],
      successURL: 'https://localhost:9377/follow',
      cancelURL: 'https://localhost:9377/',
    }
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout()
    },
  },
}
</script>
