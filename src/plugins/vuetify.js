import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import fr from 'vuetify/lib/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFCD38',
        secondary: '#4A4A4A',
        tertiary: '#6C6C6C',
        base: '#FFFFFF',
        layer: '#DEDDD7',
        accent: '#FCDD38',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#FFCD38',
        secondary: '#4A4A4A',
        tertiary: '#6C6C6C',
        base: '#FFFFFF',
        layer: '#DEDDD7',
        accent: '#FCDD38',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { fr },
    current: 'fr',
  },
})
