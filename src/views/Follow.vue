<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col sm="8" md="8" lg="8" xl="8"
        ><v-card class="mt-3" :loading="isLoading"
          ><v-map :height="400"></v-map>
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
      <v-col sm="2" md="2" lg="2" xl="2" class="justify-center"
        ><v-card class="mt-3">
          <div class="col-12 text-center pl-5">
            <v-img
              alt="CESI'EAT Logo"
              class="shrink"
              contain
              src="@/assets/cesieat_no_image.png"
              width="300"
              height="100%"
            />
          </div>
          <div class="col-12 text-center">
            <div>
              <span>Livreur :</span>
            </div>
            <div>
              <span>Milinkovitch</span>
            </div>
            <div>
              <span>Julien</span>
            </div>
            <div>
              <span>0675245698</span>
            </div>
            <div><span>2/5 </span><v-icon dense> mdi-star </v-icon></div>
          </div>
        </v-card>

        <v-card class="mt-10 pb-2">
          <div class="col-12 text-center pl-5">
            <v-img
              alt="CESI'EAT Logo"
              class="shrink"
              contain
              src="@/assets/cesieat_no_image.png"
              height="100%"
              width="300"
            />
          </div>
          <div class="col-12 text-center">
            <div>
              <span>Restaurant :</span>
            </div>
            <div>
              <span>Pizza Hut</span>
            </div>
            <div>
              <span>225 Boulevard Godard</span>
            </div>
            <div><span>4/5 </span><v-icon dense> mdi-star </v-icon></div>
          </div>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import Map from '@/components/Map'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Follow',
  components: { 'v-map': Map },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    if (this.order === null) await this.findOrder(this.id)
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
