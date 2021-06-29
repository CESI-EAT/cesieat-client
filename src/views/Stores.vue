<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Restaurants</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title>Filtrer par...</v-card-title>
          <v-card-text>
            <h5>Gamme de prix</h5>
            <v-rating
              color="primary"
              empty-icon="mdi-circle-medium"
              full-icon="mdi-currency-eur"
              length="4"
              hover
              :value="priceRange"
              @change="getStores()"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="9">
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
            </v-col>
          </v-row>
          <v-row v-if="storesLoading">
            <v-col cols="3" v-for="i in 12" :key="`product_${i}`">
              <v-card>
                <v-skeleton-loader
                  type="image, card-heading, list-item-two-line, actions"
                >
                </v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>

          <v-row v-else-if="stores && stores.length > 0">
            <v-col cols="4" v-for="store in stores" :key="`store_${store._id}`">
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
import { requestMixin } from '@/mixins/requestMixin'

export default {
  name: 'Stores',
  components: {
    StoreCard,
  },
  mixins: [requestMixin],
  props: {
    searchProp: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      stores: [],
      storesLoading: true,
      searchString: '',
      message: null,
      priceRange: 2,
    }
  },
  mounted() {
    this.searchString = this.searchProp
    this.getStores()
  },
  computed: {
    search() {
      if (this.searchString && this.searchString.length > 0) {
        return this.searchString
      } else if (this.searchProp && this.searchProp.length > 0) {
        return this.searchProp
      }
      return null
    },
  },
  methods: {
    async getStores() {
      if (this.storesLoading) {
        this.storesLoading = true
        const params = {
          search: this.search,
          'price-range': this.priceRange,
        }
        const res = await this.request(
          false,
          '/stores',
          'get',
          null,
          params,
          null,
          0
        )
        console.log(res.data)
        if (res && res.data && Array.isArray(res.data)) {
          this.stores = res.data
        } else {
          this.message = 'Aucun résultat trouvé.'
        }
        this.storesLoading = false
      }
    },
  },
}
</script>
