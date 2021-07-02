<template>
  <v-container fluid>
    <v-row class="justify-center mt-2">
      <v-col sm="8" md="8" lg="8" xl="8">
        <v-card tile :loading="!order || order.status !== 'DELIVERED'">
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
        <v-card class="mt-4 pb-2" v-if="order !== null">
          <v-card-title>Résumé de la commande</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-list class="transparent">
              <v-list-item class="pd-0">
                <v-list-item-content class="text-subtitle-1"
                  >Estimation du temps</v-list-item-content
                >
                <v-list-item-action>
                  <strong> {{ order.deliverTime }}</strong></v-list-item-action
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="text-subtitle-1"
                  >Adresse</v-list-item-content
                >
                <v-list-item-action>
                  <strong>
                    {{ order.deliveryAddress }}</strong
                  ></v-list-item-action
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="text-subtitle-1"
                  >Ville</v-list-item-content
                >
                <v-list-item-action>
                  <strong>Bordeaux</strong></v-list-item-action
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="text-subtitle-1"
                  >Mode de livraison</v-list-item-content
                >
                <v-list-item-action>
                  <strong>
                    {{ order.interactionType }}</strong
                  ></v-list-item-action
                >
              </v-list-item>
              <v-list-item v-if="order.specialInstructions">
                <v-list-item-content class="text-subtitle-1"
                  >Instructions de livraison</v-list-item-content
                >
                <v-list-item-action>
                  <strong>
                    {{ order.specialInstructions }}</strong
                  ></v-list-item-action
                >
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Vos articles :</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="product in order.products"
                :key="'product_' + product.id"
              >
                <v-list-item-content class="text-subtitle-1"
                  ><strong>{{ product.name }}</strong>
                  {{ product.price.toFixed(2) }} €</v-list-item-content
                >
                <v-list-item-action class="text-h5">
                  x {{ product.quantity }}</v-list-item-action
                >
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" class="justify-center">
        <v-card tile class="pb-2" v-if="order && order.madeBy">
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
        <v-card tile class="mt-4 pb-2" v-if="order && order.deliveredBy">
          <v-card-title>Votre livreur</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>
            {{ order.deliveredBy.firstname }} {{ order.deliveredBy.lastname }}
          </v-card-title>
          <v-card-text>
            Vous pouvez le joindre par téléphone au
            <strong>{{ order.deliveredBy.phoneNum }}</strong>
          </v-card-text>
        </v-card>
        <v-card
          tile
          class="mt-4 pb-2"
          v-if="
            order &&
              order.madeBy &&
              ((user.id === order.madeBy.userId &&
                order.status === 'ACCEPTED') ||
                (order.status === 'DELIVERY' &&
                  user.id === order.deliveredBy.id))
          "
        >
          <v-card-title>Action en attente</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            {{
              order.status === 'ACCEPTED'
                ? 'Confirmation de la préparation de la commande'
                : 'Confirmation de la livraison de la commande'
            }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              @click="validate(order._id)"
              block
              :loading="isUpdating"
            >
              Valider
            </v-btn>
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
    ...mapGetters('orders', ['order', 'isLoading', 'isUpdating']),
    ...mapGetters('auth', ['user']),
    currentStep() {
      return this.order
        ? this.steps.findIndex((s) => s === this.order.status) + 1
        : 1
    },
  },
  methods: {
    ...mapActions('orders', ['findOrder', 'validate']),
  },
  data: () => ({
    steps: ['REQUESTED', 'ACCEPTED', 'PREPARED', 'DELIVERY', 'DELIVERED'],
  }),
}
</script>
