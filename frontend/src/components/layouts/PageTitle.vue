<template>
  <v-container fluid class="mb-5">
    <v-row class="mb-2">
      <div class="text-h5 font-weight-bold" v-text="this.$store.getters.pageTitle"></div>
    </v-row>
    <v-row align="center">
      <v-breadcrumbs class="pa-0" :items="items"></v-breadcrumbs>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
  components: {
  }
}
</script>
