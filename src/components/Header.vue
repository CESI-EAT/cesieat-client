<template>
  <div>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        color="white"
        v-if="$vuetify.breakpoint.smAndDown"
        @click="appBar = !appBar"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><v-btn text color="transparent" to="/">
          <v-img
            alt="CESI'EAT Logo"
            class="shrink mr-2"
            contain
            src="@/assets/cesieat_white_horizontal.png"
            height="60"
            position="left"
          /> </v-btn
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn v-if="isLoggedIn" to="/history" text color="base">
          <v-icon class="mr-2">mdi-clipboard-list</v-icon>
          <span>Historique des commandes</span>
        </v-btn>
        <v-btn
          v-if="
            isLoggedIn &&
              (user.role.name === 'Restaurateur' ||
                (user.role.name === 'Livreur' && !hasOrderInProgress))
          "
          to="/orders"
          text
          color="base"
        >
          <v-icon class="mr-2">mdi-clipboard-list</v-icon>
          <span>Mes commandes en cours</span>
        </v-btn>
        <v-btn
          v-else-if="isLoggedIn && hasOrderInProgress"
          :to="`/orders/${order._id}/follow`"
          text
          color="base"
        >
          <v-icon class="mr-2">mdi-clipboard-list</v-icon>
          <span>Ma commande en cours</span>
        </v-btn>

        <v-btn v-if="isLoggedIn" to="/profile" text color="base">
          <v-icon class="mr-2">mdi-account</v-icon>
          <span>Gérer mon profil</span>
        </v-btn>
        <v-btn
          v-if="isLoggedIn"
          text
          color="base"
          style="pointer-events: none;"
        >
          <span>{{ user.firstname }} {{ user.lastname }}</span>
        </v-btn>
        <v-btn v-if="isLoggedIn" @click="logout" text color="base">
          <v-icon class="mr-2">mdi-logout</v-icon>
        </v-btn>
        <v-btn v-if="!isLoggedIn" text to="/login" color="base">
          <v-icon class="mr-2">mdi-login</v-icon>
          <span>Se connecter</span>
        </v-btn>
        <v-btn v-if="!isLoggedIn" text to="/register" color="base">
          <v-icon class="mr-2">mdi-account-arrow-right</v-icon>
          <span>S'inscrire</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="appBar" absolute temporary color="white">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          v-if="isLoggedIn"
          active-class="primary--text text--accent-4"
        >
          <v-list-item style="pointer-events: none;">
            <v-list-item-title class="text-h6"
              >{{ user.firstname }} {{ user.lastname }}</v-list-item-title
            >
          </v-list-item>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>
          <v-list-item to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Gérer mon profil</v-list-item-title>
          </v-list-item>
          <v-list-item to="/orders">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mes commandes</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group
          v-model="group"
          v-else
          active-class="primary--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>
          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Se connecter</v-list-item-title>
          </v-list-item>

          <v-list-item to="/register">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>S'inscrire</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'user', 'isLoading']),
    ...mapGetters('orders', ['hasOrderInProgress', 'order']),
  },
  watch: {
    $route(to, from) {
      this.appBar = false
    },
  },
  data: () => ({
    appBar: false,
    group: null,
  }),
  methods: {
    async logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
  },
}
</script>
