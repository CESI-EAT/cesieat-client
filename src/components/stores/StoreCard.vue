<template>
  <v-card min-width="220">
    <v-img cover :src="getImage(store.image)" />
    <v-card-title>
      {{ store.name }}
    </v-card-title>
    <v-card-subtitle>
      <store-card-rating
        :rating="store.rating"
        :ratingCount="store.ratingCount"
      />
      <div class="d-flex">
        <span v-for="i in store.priceRange" :key="`symbol_${i}`" class="mr-1"
          >€</span
        >
      </div>
    </v-card-subtitle>
    <v-card-text>
      <v-chip
        v-for="(tag, index) in store.tags"
        :key="`${tag}_${index}`"
        class="mr-1 mb-1"
        small
      >
        {{ tag }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import { requestMixin } from '@/mixins/requestMixin.js'
import StoreCardRating from './StoreCardRating.vue'

export default {
  components: { StoreCardRating },
  name: 'StoreCard',
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  mixins: [requestMixin],
}
</script>
