<template>
  <v-content>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="require('@/assets/dog.jpg')"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">This is cute dog!</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>hoge</span><br>
              <span>foo</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange" @click="toTweet">to Room</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  name: 'room',
  methods: {
    toTweet () {
      this.$router.push('/tweet')
    }
  }
}
</script>

<style>
</style>
