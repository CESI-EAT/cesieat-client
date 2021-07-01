<template>
  <v-container fluid>
    <v-row class="justify-center mt-2">
      <v-col sm="8" md="8" lg="8" xl="8">
        <v-card tile :loading="true">
          <template slot="progress">
            <v-progress-linear
              color="primary"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>Suivi de votre commande</v-card-title>
          <my-map :height="400"></my-map>
          <v-stepper v-model="currentStep" max-width="100%">
            <v-stepper-header>
              <v-stepper-step :complete="currentStep > 1" step="1">
                Traitement en cours
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="currentStep > 2" step="2">
                Commande acceptée
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="currentStep > 3" step="3">
                Commande prête
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="currentStep > 4" step="4">
                Coursier en chemin
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="currentStep > 5" step="5">
                Commande livrée
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </v-card>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" class="justify-center">
        <v-card tile class="pb-2">
          <v-img
            alt="CESI'EAT Logo"
            class="shrink"
            contain
            :src="order.madeBy.image || '@/assets/cesieat_no_image.png'"
            height="100%"
            width="300"
          />
          <v-card-title>{{ order.madeBy.name }}</v-card-title>
          <v-card-text>
            {{ order.madeBy.address }} à {{ order.madeBy.city }}
          </v-card-text>
          <v-card-actions>
            <store-card-rating
              :rating="order.madeBy.rating"
              :ratingCount="order.madeBy.ratingCount"
            />
          </v-card-actions>
        </v-card>
        <v-card tile class="pb-2" v-if="order.deliveredBy">
          <v-img
            alt="CESI'EAT Logo"
            class="shrink"
            contain
            :src="order.deliveredBy.image || '@/assets/cesieat_no_image.png'"
            height="100%"
            width="300"
          />
          <v-card-title>{{ order.deliveredBy.name }}</v-card-title>
          <v-card-text>
            {{ order.deliveredBy.address }} à {{ order.deliveredBy.city }}
          </v-card-text>
          <v-card-actions>
            <store-card-rating
              :rating="order.deliveredBy.rating"
              :ratingCount="order.deliveredBy.ratingCount"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from '@/components/Map.vue'
import StoreCardRating from '@/components/stores/StoreCardRating.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Follow',
  components: { 'my-map': Map, 'store-card-rating': StoreCardRating },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    this.findOrder(this.id)
  },
  computed: {
    ...mapGetters('orders', ['order', 'isLoading']),
    currentStep() {
      return this.order
        ? this.steps.findIndex((s) => s === this.order.status) + 1
        : 1
    },
  },
  methods: {
    ...mapActions('orders', ['findOrder']),
  },
  data: () => ({
    steps: ['REQUESTED', 'ACCEPTED', 'PREPARED', 'DELIVERY', 'DELIVERED'],
  }),
}
</script>
