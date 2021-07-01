<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col sm="6" md="6" lg="4" xl="3" cols="12" class="justify-center">
        <v-card tile class="mx-auto pa-2">
          <v-card-title class="text-h4">BURGER KING</v-card-title>
          <v-map :height="200"></v-map>
          <v-card-text>
            <v-list class="transparent">
              <v-list-item class="pd-0">
                <v-text-field label="Adresse" v-model="address" required>
                </v-text-field>
              </v-list-item>
              <v-list-item>
                <v-text-field label="Ville" v-model="city" required>
                </v-text-field>
              </v-list-item>
              <v-list-item>
                <v-select
                  label="Mode de livraison"
                  :items="[
                    'En main propre',
                    'À l\'extérieur',
                    'Déposer la commande à la porte',
                  ]"
                  v-model="interactionType"
                  required
                >
                </v-select>
              </v-list-item>
              <v-list-item>
                <v-textarea
                  label="Instructions de livraison"
                  v-model="specialInstructions"
                >
                </v-textarea>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Estimation du temps : 20-45 min </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Vos articles :</v-card-title>
        </v-card>
      </v-col>
      <v-col sm="6" md="6" lg="4" xl="3" class="justify-center">
        <v-card
          tile
          class="mx-auto pa-2"
          style="background-color: rgb(246, 246, 246); position: sticky; top: 76px;"
        >
          <v-card-text>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-content>Sous-total</v-list-item-content>
                <v-list-item-action>25 €</v-list-item-action>
              </v-list-item>
              <v-divider class="mx-4"></v-divider>
              <v-list-item>
                <v-list-item-content>Service</v-list-item-content>
                <v-list-item-action>2.5 €</v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Livraison</v-list-item-content>
                <v-list-item-action>2.5 €</v-list-item-action>
              </v-list-item>
              <v-divider class="mx-4"></v-divider>
              <v-list-item>
                <v-list-item-content
                  ><strong>Total</strong></v-list-item-content
                >
                <v-list-item-action><strong>30 €</strong></v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-stripe-button></v-stripe-button>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-title>Laisser un pourboire :</v-card-title>
          <v-card-text>
            <v-chip-group
              v-model="tips"
              active-class="primary accent-4 white--text"
              column
            >
              <v-chip>Plus tard</v-chip>
              <v-chip>10 %</v-chip>
              <v-chip>15 %</v-chip>
              <v-chip>20 %</v-chip>
              <v-chip>25 %</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Map from '@/components/Map.vue'
import StripeButton from '@/components/store/StripeButton.vue'

export default {
  name: 'Payment',
  components: { 'v-map': Map, 'v-stripe-button': StripeButton },
  computed: {
    ...mapGetters('stores', ['store']),
    ...mapGetters('auth', ['user']),
    ...mapGetters('orders', ['isCreating', 'cart']),
  },
  mounted() {
    this.address = this.user ? this.user.address : ''
    this.city = this.user ? this.user.city : ''
  },
  data: () => ({
    address: '',
    city: '',
    interactionType: 'En main propre',
    specialInstructions: '',
    tips: '',
  }),
  methods: {
    submitOrder() {
      const payload = {
        ...this.cart,
        deliveryAddress: this.address,
        deliverTime: '20-45 min',
        specialInstructions: this.specialInstructions,
        interactionType: this.interactionType,
        tips: this.tips,
      }
    },
  },
}
</script>
