<template>
  <v-content>
    <div id="timeline">
      <v-divider></v-divider>
      <v-card>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline">Unlimited music now</div>
                  <div id="lo">Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>data</v-btn>
                </v-card-actions>
              </v-card>
              <v-divider></v-divider>
              <v-card color="cyan darken-2" class="white--text">
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
              <v-divider></v-divider>
              <v-card color="purple" class="white--text">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs7>
                      <div>
                        <div class="headline">Halycon Days</div>
                        <div>Ellie Goulding</div>
                      </div>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-media
                        src="/static/doc-images/cards/halcyon.png"
                        height="125px"
                        contain
                      ></v-card-media>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
      </v-card>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'tweet'
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
</style>
