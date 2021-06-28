<template>
  <v-container fluid id="home">
    <v-row class="justify-center mt-16">
      <v-col sm="12" md="6" lg="4" xl="3">
        <span class="slogan" :style="`color: ${getCurrentTheme.primary}`">
          Dégustez, savourez, tout en restant chez vous.
        </span>
        <div class="d-flex">
          <v-text-field
            v-model="searchString"
            color="primary"
            class="mr-1"
            prepend-inner-icon="mdi-store"
            filled
            placeholder="Rechercher un restaurant..."
            @keydown.enter="search()"
          />
          <v-btn flat color="primary" height="56" @click="search()">
            <v-icon large>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { themeMixin } from '@/mixins/themeMixin'

export default {
  name: 'Home',
  mixins: [themeMixin],
  data() {
    return {
      searchString: '',
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'Stores',
        params: {
          search: this.searchString,
        },
      })
    },
  },
}
</script>

<style scoped>
#home {
  background-image: url('../assets/home_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
.slogan {
  font-weight: 800;
  font-size: 3.5em;
}
</style>
