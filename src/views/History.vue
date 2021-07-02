<template>
  <v-container>
    <v-row class="mt-2">
      <v-col>
        <h1 class="text-h2">Historique des commandes</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-8" dense>
      <v-col v-for="(order, i) in orders" :key="i" cols="12">
        <v-card elevation="5" shaped class="pb-2">
          <v-img
            alt="CESI'EAT Logo"
            :src="order.madeBy.image || '@/assets/cesieat_no_image.png'"
            height="100px"
          >
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn
                  color="primary"
                  v-if="order.status === 'REQUESTED'"
                  :to="`/orders/${order._id}/follow`"
                  >Suivre</v-btn
                >
                <v-btn
                  color="success"
                  v-if="
                    (order.status === 'REQUESTED' &&
                      user.role.name === 'Restaurateur') ||
                      (order.status === 'PREPARED' &&
                        user.role.name === 'Livreur')
                  "
                  @click="validate(order._id)"
                  >Accepter</v-btn
                >
                <v-btn
                  color="error"
                  v-if="
                    order.status === 'REQUESTED' &&
                      user.role.name === 'Restaurateur'
                  "
                  >Refuser</v-btn
                >
              </v-card-actions>
            </v-app-bar>
          </v-img>
          <v-row>
            <v-col cols="6">
              <v-card-title class="headline"
                >{{ order.orderedBy.firstname }}
                {{ order.orderedBy.lastname }}
              </v-card-title>
              <v-card-subtitle
                >{{ order.deliveryAddress }} à Bordeaux</v-card-subtitle
              ></v-col
            >
            <v-divider vertical></v-divider>
            <v-col cols="6">
              <v-card-title class="headline"
                >{{ order.madeBy.name }}
              </v-card-title>
              <v-card-subtitle
                >{{ order.madeBy.address }} à Bordeaux</v-card-subtitle
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'History',
  mounted() {
    this.loadHistory(this.user.id)
  },
  computed: {
    ...mapGetters('orders', ['orders', 'isLoading']),
    ...mapGetters('auth', ['user']),
  },
  methods: {
    ...mapActions('orders', ['loadHistory']),
  },
}
</script>
