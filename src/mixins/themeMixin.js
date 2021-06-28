export const themeMixin = {
  computed: {
    isThemeDark() {
      return this.$vuetify.theme.dark ? true : false
    },
  },
}
