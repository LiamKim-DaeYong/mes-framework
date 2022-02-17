<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
#app {
  background-color: #f0f1f5;
}

.v-navigation-drawer {
  z-index: 99 !important;
}

.v-app-bar {
  z-index: 999 !important;
}
</style>
