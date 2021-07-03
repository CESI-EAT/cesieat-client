<template>
  <v-container fluid id="login">
    <v-row class="justify-center mt-16">
      <v-col sm="12" md="6" lg="4" xl="3"
        ><login-form :from="from"></login-form
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { themeMixin } from '@/mixins/themeMixin'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Login',
  mixins: [themeMixin],
  components: { LoginForm },
  data() {
    return {
      from: null,
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.from = from
    })
  },
}
</script>

<style scoped>
#login {
  background-image: url('../assets/home_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
</style>
