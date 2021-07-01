<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Commandes</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-8" dense>
      <v-col sm="6" md="8" lg="10" xl="12"
        ><v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card color="grey lighten-4">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3" size="150" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
              <v-card-title class="headline">Heure</v-card-title>
              <v-card-title class="headline">Articles</v-card-title>
              <div>
                <div class="text-center ma-8">
                  <v-btn color="primary">Accepter</v-btn>
                </div>
                <div class="text-center ma-6">
                  <v-btn width="115" color="error">Refuser</v-btn>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StoreOrders',
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
}
</script>
