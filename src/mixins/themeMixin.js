export const themeMixin = {
  computed: {
    isThemeDark() {
      return this.$vuetify.theme.dark
    },
    getLightTheme() {
      return this.$vuetify.theme.themes.light
    },
    getDarkTheme() {
      return this.$vuetify.theme.themes.dark
    },
    getCurrentTheme() {
      return this.isThemeDark ? this.getDarkTheme : this.getLightTheme
    },
  },
}
