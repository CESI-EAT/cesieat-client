<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Restaurants</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="mdAndUp" md="3">
        <v-card>
          <v-card-title>Filtrer par...</v-card-title>
          <v-card-text>
            <stores-filter
              :filter="filter"
              @price-range-input="handlePriceRangeInput($event)"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="9">
        <v-container class="pa-0" fluid>
          <v-row>
            <v-col>
              <div class="d-flex">
                <v-text-field
                  v-model="searchString"
                  color="primary"
                  class="mr-1"
                  prepend-inner-icon="mdi-store"
                  filled
                  placeholder="Rechercher un restaurant..."
                  @keydown.enter="getStores()"
                />
                <v-btn color="primary" height="56" @click="getStores()">
                  <v-icon large>mdi-magnify</v-icon>
                </v-btn>
              </div>
              <v-dialog v-if="smAndDown" v-model="showDialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    block
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    @click="filterOverlay = true"
                  >
                    <v-icon class="mr-2">mdi-filter</v-icon>
                    Filtrer les résultats
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Filtrer par...</v-card-title>
                  <v-card-text>
                    <stores-filter
                      ref="mobileFilter"
                      :filter="filter"
                      @submit="handleFilterSubmit($event)"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      block
                      @click="$refs.mobileFilter.submit()"
                    >
                      Valider</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row v-if="loading">
            <v-col sm="6" md="4" v-for="i in 12" :key="`product_${i}`">
              <v-card>
                <v-skeleton-loader
                  type="image, card-heading, list-item-two-line, actions"
                >
                </v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>
          <v-row v-else-if="stores && stores.length > 0">
            <v-col
              sm="6"
              md="4"
              v-for="store in stores"
              :key="`store_${store._id}`"
            >
              <store-card :store="store" />
            </v-col>
          </v-row>
          <v-row v-else-if="message && message.length > 0">
            <v-col>
              <div class="text-center">
                <span>{{ message }}</span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StoreCard from '@/components/stores/StoreCard'
import StoresFilter from '@/components/stores/StoresFilter'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Stores',
  components: {
    StoreCard,
    StoresFilter,
  },
  props: {
    searchProp: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      searchString: '',
      message: null,
      filter: {
        priceRange: 4,
      },
      showDialog: false,
    }
  },
  mounted() {
    this.searchString = this.searchProp
    this.getStores()
  },
  computed: {
    ...mapGetters('stores', ['stores', 'loading']),
    search() {
      if (this.searchString && this.searchString.length > 0) {
        return this.searchString
      } else if (this.searchProp && this.searchProp.length > 0) {
        return this.searchProp
      }
      return null
    },
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  methods: {
    ...mapActions('stores', ['findAll']),
    handlePriceRangeInput(value) {
      this.priceRange = value
      this.getStores()
    },
    // for mobile filters, a submit action is needed
    handleFilterSubmit(filter) {
      this.filter = filter
      console.log(this.filter)
      this.showDialog = false
      this.getStores()
    },
    async getStores() {
      if (!this.loading) {
        const params = {
          search: this.search,
          'price-range': this.filter.priceRange,
        }
        this.findAll(params)
      }
    },
  },
}
</script>
