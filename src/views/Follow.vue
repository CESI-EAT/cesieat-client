<template>
  <v-container>
    <v-row class="justify-center">
      <v-col sm="8" md="8" lg="8" xl="8" class="justify-center"
        ><Map></Map
      ></v-col>
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

        <v-card class="mt-4 pb-2">
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

export default {
  name: 'Follow',
  components: { Map },
  methods: {},
  data: () => ({}),
}
</script>
