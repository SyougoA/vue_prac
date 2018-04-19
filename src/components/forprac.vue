<template>
  <v-content>
    <!-- <div id="timeline">
      <v-divider></v-divider>
      <v-card>
          <v-card color="grey lighten-4">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="require('@/assets/dog.jpg')"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
      </v-card>
    </div> -->
    <v-card id="timeline">
      <!-- :keyの中身を同じにすると警告 -->
      <v-divider></v-divider>
      <v-card color="grey lighten-4" v-for="post in posts" :key="post.contents">
        <v-container>
          <v-layout row>
            <v-flex xs7>
              <p>{{ post.contents }}</p>
            </v-flex>
            <v-flex xs5>
              <v-card-media
                :src="require('@/assets/dog.jpg')"
                height="125px"
                contain
              ></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider></v-divider>
      </v-card>
    </v-card>
  </v-content>
</template>

<script>
const json_data = {
  "posts": {
    contents: "hogehogehoge"
  }
}

export default {
  name: 'forprac',
  data () {
    return {
      posts: [
        { id: 1, contents: "見てみて！可愛い犬！", img: '@/assets/dog.jpg'},
        { id: 2, contents: "hogehogehog"},
        { id: 3, contents: "hogehogehoe"},
        { id: 4, contents: "hogehogehge"},
        { id: 5, contents: "hogehogeoge"}
      ]
    }
  },
  computed: {
    diveCheck () {
      let check = true

    }
  }
}
</script>

<style>
#timeline {
  max-width: 500px;
  max-height: 400px;
  margin: auto;
}
</style>
