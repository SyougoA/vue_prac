<template>
  <div id="tool">
    <v-toolbar
      dark
      color="primary"
      clipped-left
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="navSet"></v-toolbar-side-icon>
      <!-- ここのマージンを綺麗にしたい -->
      <v-toolbar-title class="white--text">Titleeeeee</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items v-show="check">
          <v-btn flat @click="toNew">NEW</v-btn>
          <v-btn flat @click="toHot">HOT</v-btn>
          <v-btn flat>BURN</v-btn>
        </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'tool',
  computed: {
    check () {
      let data = this.$route.path !== '/' ? true : false
      return data
    }
  },
  methods: {
    navSet () {
      this.$store.state.navbar = !this.$store.state.navbar
    },
    toNew () {
      this.$router.push('/tweet')
    },
    toHot () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tool {
  margin: auto;
}
</style>
