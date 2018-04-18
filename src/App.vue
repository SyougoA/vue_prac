<template>
  <div id="app">
    <v-app>
      <tool/>
      <navi/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import tool from './components/tool'
import navi from './components/navi'

const components = {
  'tool': tool,
  'navi': navi
}

export default {
  name: 'App',
  components: components
}
</script>

<style>

</style>
