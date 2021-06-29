<template>
  <v-container>
    <v-row class="justify-center">
      <v-col sm="5" md="5" lg="5" xl="5" class="justify-center">
        <v-card class="mt-3 pa-4 mb-16 pb-10" width="600">
          <div class="col-12">
            <span class="font-weight-bold">BURGER KING</span>
          </div>
          <iframe
            width="100%"
            height="300"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/directions
  ?key=AIzaSyDxlv2xjtDEbsOXK_ncWeqjvgI62N6PPu4
  &origin=14+bis+rue+fringon
  &destination=bayonne
  &avoid=tolls|highways"
          >
          </iframe>
          <div class="row mt-1 pl-2 justify-center">
            <div class="col-12">
              <span>Adresse de livraison :</span>
            </div>
            <v-divider class="col-12"> </v-divider>
            <div class="col-12">
              <span>Instructions de livraisons :</span>
            </div>
            <v-divider class="col-12"> </v-divider>
            <div class="col-12">
              <span>Estimation du temps :</span>
            </div>
            <v-divider class="col-12"> </v-divider>
            <div class="col-12">
              <span>Vos articles :</span>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col sm="4" md="4" lg="4" xl="4" class="justify-center"
        ><v-card class="mt-3 pa-4">
          <div>
            <div>
              <div class="row mt-1 pl-3 pb-2 justify-center">
                <div class="col-12">
                  <span>Sous-total </span>
                  <div class="text-right"><span>25 €</span></div>
                </div>

                <div class="col-12">
                  <span>Service </span>
                  <div class="text-right"><span>2.5 €</span></div>
                </div>
                <div class="col-12">
                  <span>Livraison </span>
                  <div class="text-right"><span>2.5 €</span></div>
                </div>

                <div class="col-12 font-weight-bold">
                  <div><span>Total :</span></div>
                  <div class="text-right"><span>30 €</span></div>
                </div>
              </div>
              <div>
                <div class="col-12">
                  <v-btn width="100%" color="primary">Paiement </v-btn>
                </div>
                <v-divider class="col-12"> </v-divider>
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        >Laisser un pourboire :</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <div>
                  <div class="text-center pb-5">
                    <v-btn class="mr-2">Plus tard</v-btn>

                    <v-btn class="mr-2">10 %</v-btn>

                    <v-btn class="mr-2">15 %</v-btn>

                    <v-btn class="mr-2">20 %</v-btn>

                    <v-btn class="mr-2">25 %</v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div></v-card
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
//import Map from '@/components/Map'

export default {
  name: 'Payment',
  //components: { Map },
  methods: {},
  data: () => ({}),
}
</script>
