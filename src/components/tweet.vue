<template>
  <v-content>
    <div id="timeline">
      <v-divider></v-divider>
      <v-card v-for="item in items" :key="item.name">
        <v-card color="grey lighten-4">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">{{ item.name }}</div>
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
        <v-divider></v-divider>
      </v-card>
        <v-btn
          dark
          fab
          top
          right
          color="red"
          id="floatbtn"
        >
          <v-icon>edit</v-icon>
        </v-btn>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'tweet',
  data () {
    return {
      items: [
        { name: 'Sample1' },
        { name: 'Sample2' },
        { name: 'Sample3' },
        { name: 'Sample4' },
        { name: 'Sample5' },
        { name: 'Sample6' },
        { name: 'Sample7' },
        { name: 'Sample8' },
        { name: 'Sample9' },
        { name: 'Sample10' },
        { name: 'Sample11' },
        { name: 'Sample12' },
      ]
    }
  }
}
</script>

<style>
#timeline {
  max-width: 600px;
  max-height: 400px;
  margin: auto;
}

#lo {
  overflow: hidden;
  text-overflow: ellipsis;
}

#floatbtn {
  margin-left: 560px;
}
</style>
