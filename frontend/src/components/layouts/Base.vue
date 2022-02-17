<template>
  <v-app>
    <navigation-drawer></navigation-drawer>

    <app-bar></app-bar>

    <v-main>
      <v-container fluid class="px-5 py-7">
        <page-title></page-title>

        <v-card
          tile
          min-height="80vh"
          class="pa-5">

          <router-view></router-view>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/layouts/NavigationDrawer";
import AppBar from "@/components/layouts/AppBar";
import PageTitle from "@/components/layouts/PageTitle";

export default {
  components: {
    NavigationDrawer,
    AppBar,
    PageTitle,
  }
}
</script>
