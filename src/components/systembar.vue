<template>
<div>
    <v-subheader>Lights out</v-subheader>
      <v-system-bar status color="primary">
        <v-spacer></v-spacer>
        <v-icon>network_wifi</v-icon>
        <v-icon>signal_cellular_null</v-icon>
        <v-icon>battery_full</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </div>
</template>

<script>
export default {
  name: "systembar"
}
</script>

<style>

</style>

