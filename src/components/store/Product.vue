<template>
  <v-card>
    <v-img cover height="160" :src="product.image" />
    <v-card-title class="text-capitalize">{{ product.name }}</v-card-title>
    <v-card-subtitle>
      <p style="height: 60px">{{ description }}</p>
    </v-card-subtitle>
    <v-card-text>
      <span style="font-size: 1.4em">{{ price }} €</span>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" block @click="$emit('add-product', product.id)">
        <v-icon class="mr-2"> mdi-plus</v-icon>
        Ajouter au panier
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    price() {
      return this.product.price.toFixed(2)
    },
    description() {
      const desc = this.product.description
      if (desc && desc.length > 0) {
        return desc.charAt(0).toUpperCase() + desc.slice(1)
      }
      return null
    },
  },
}
</script>
