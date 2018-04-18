<template>
  <v-navigation-drawer
    fixed
    clipped
    app
    v-model="change"
  >
    <v-list dense class="pt-0">
        <v-list-tile @click="toTop">
          <v-list-tile-action>
            <v-icon>room</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>top</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toRoom">
          <v-list-tile-action>
            <v-icon>room</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Room</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navi',
  computed: {
    change: {
      get () {
        return this.$store.state.navbar
      },
      set (value) {
        this.$store.commit('updateNavbar', value)
      }
    }
  },
  methods: {
    toTop () {
      this.$router.push('/')
    },
    toRoom () {
      this.$router.push('room')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
