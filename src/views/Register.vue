<template>
  <v-container fluid id="register">
    <v-row class="justify-center mt-16">
      <v-col sm="10" md="6" lg="6" xl="6"
        ><register-form></register-form
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { themeMixin } from '@/mixins/themeMixin'
import RegisterForm from '@/components/RegisterForm'
export default {
  name: 'Register',
  mixins: [themeMixin],
  components: { RegisterForm },
}
</script>

<style scoped>
#register {
  background-image: url('../assets/home_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
</style>
