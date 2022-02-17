<template>
  <v-navigation-drawer
    clipped app dark
    mini-variant
    expand-on-hover>
    <v-list nav dense>
      <template v-for="menu in menus">
        <v-list-item
          v-if="!menu.lists"
          :to="menu.link"
          :key="menu.name"
          @click.stop="menu_close">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ menu.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-else
          color="white"
          :prepend-icon="menu.icon"
          :key="menu.name"
          no-action
          v-model="menu.active">

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ menu.name }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subMenu in menu.lists"
            :key="subMenu.name"
            :to="subMenu.link">

            <v-list-item-title>
              {{ subMenu.name }}
            </v-list-item-title>

          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
</style>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    menu_close() {
      this.menus.forEach((menu) => (menu.active = false));
    },
  },
  computed: {
    menus: {
      get() {
        return this.$store.getters.menus
      }
    },
  }
}
</script>
