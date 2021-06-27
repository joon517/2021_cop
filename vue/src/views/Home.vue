<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="8">
          <!-- <v-card class="mb-2 pa-1 borderLeft" color="#4FC694"> -->
          <v-card class="mb-2 pa-1 borderLeft" color="#808080">
            <!-- <v-toolbar color="#4FC694" dark flat> -->
            <v-toolbar color="#808080" dark flat>
              <v-tabs align-with-title>
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab>
                  <v-btn dark icon>
                    <v-icon>fas fa-home</v-icon>
                  </v-btn>
                </v-tab>
                <!-- <v-tab>
                  <v-btn dark icon>
                    <v-badge content="2" color="orange">
                      <v-icon>fas fa-shopping-cart</v-icon>
                    </v-badge>
                  </v-btn>
                </v-tab> -->
              </v-tabs>
            </v-toolbar>
          </v-card>
          <v-card class="rounded-xl">
            <!-- <v-list three-line> -->
              <template v-for="(item) in items">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                <v-list-item v-else :key="item.title">
                  <!-- <v-list-item-avatar color="#EFF4F1" size="70" rounded>
                    <img :src="item.avatar" />
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-title v-html="item.money"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>


                  <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>



                </v-list-item>
              </template>
            <!-- </v-list> -->
          </v-card>
        </v-col>
        <!-- <v-col cols="12" sm="6">
            <v-text-field label="Search" prepend-inner-icon="fas fa-search" filled rounded color="#4FC694"></v-text-field>
          <v-card class="rounded-xl mt-2">
            <v-row>
              <v-col cols="12" sm="4" align="center">
                  <v-avatar size="300" tile>
                    <v-img src="5.png"></v-img>
                  </v-avatar>
                  <v-btn fab icon class="ml-14"><v-icon>fas fa-minus</v-icon></v-btn>
                  1
                  <v-btn fab icon><v-icon>fas fa-plus</v-icon></v-btn>
              </v-col>
              <v-col cols="12" sm="8" class="px-10">
                <v-app-bar flat color="rgba(0,0,0,0)">
                  <v-spacer></v-spacer>
                  <v-icon color="grey lighten-1">fas fa-heart</v-icon>
                </v-app-bar>
                <h3 class="grey--text">Lidah Buaya</h3>
                <p class="grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dolorum, 
                      quibusdam eum pariatur, laboriosam quia provident placeat corrupti repellat odio at.
                       Hic commodi .</p>
                       <h5 class="grey--text">Overview</h5>
                       <v-row>
                         <v-col cols="12" sm="6">
                           <v-app-bar flat color="rgba(0,0,0,0)">
                             <v-avatar color="#FDD3E9" size="30" class="mr-3">
                               <v-icon small color="grey darken-1">far fa-calendar-alt</v-icon>
                             </v-avatar>
                             30 Days
                           </v-app-bar>
                           <v-app-bar flat color="rgba(0,0,0,0)">
                             <v-avatar color="#FDD3E9" size="30" class="mr-3">
                               <v-icon small color="grey darken-1">fas fa-compress-alt</v-icon>
                             </v-avatar>
                             4.7 Diameter
                           </v-app-bar>
                         </v-col>
                         <v-col cols="12" sm="6">
                            <v-app-bar flat color="rgba(0,0,0,0)">
                             <v-avatar color="#FDD3E9" size="30" class="mr-3">
                               <v-icon small color="grey darken-1">fas fa-temperature-low</v-icon>
                             </v-avatar>
                             70% Humidity
                           </v-app-bar>
                           <v-app-bar flat color="rgba(0,0,0,0)">
                             <v-avatar color="#FDD3E9" size="30" class="mr-3">
                               <v-icon small color="grey darken-1">fas fa-tint</v-icon>
                             </v-avatar>
                             4.2° Height
                           </v-app-bar>
                         </v-col>
                       </v-row>
                       <v-btn rounded color="warning"><v-icon left>fas fa-plus</v-icon>Add to cart</v-btn>
                       <strong class="ml-2">$234</strong>
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card class="rounded-xl mt-16">
                <v-row>
                  <v-col cols="12" sm="4" align="center">
                    <v-avatar size="200" tile class="mt-n16">
                        <v-img src="2.png"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="8" class="pa-10">
                    <h3 class="black--text">Bonsi Tree</h3>
                    <h3 class="black--text">$386</h3>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card class="rounded-xl mt-16">
                <v-row>
                  <v-col cols="12" sm="4" align="center">
                    <v-avatar size="200" tile class="mt-n16">
                      <v-img src="66.png"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="8" class="pa-10">
                    <h3 class="black--text">Weired Cactus</h3>
                    <h3 class="black--text">$128</h3>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col> -->
        <v-col cols="12" sm="4">
          <!-- <v-card class="mb-2 pa-1 borderRight" color="#4FC694"> -->
          <v-card class="mb-2 pa-1 borderRight" color="#808080">
            <!-- <v-toolbar color="#4FC694" dark flat> -->
            <v-toolbar color="#808080" dark flat>
              <v-avatar class="ml-14 mr-2 border" size="35">
                <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
              </v-avatar>
              <v-toolbar-title class="title white--text pl-0 mr-3">박시현</v-toolbar-title>
              <!-- <v-icon small>fas fa-chevron-down</v-icon> -->
              </v-toolbar>   
                </v-card>
                <v-card class="rounded-xl">
                  <v-toolbar flat>
                    <v-toolbar-title>Online</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn text class="mr-2">
                      <v-badge bordred bottom color="orange" dot offset-x="10" offset-y="10">
                        <v-icon left color="black">fas fa-user</v-icon>
                      </v-badge>
                      119
                    </v-btn>
                  </v-toolbar>
                  <v-list three-line class="mt-n4">
                    <v-list-item-group>
                      <template v-for="(item) in files">
                        <v-list-item :key="item.title">
                          <template>
                            <v-list-item-content>
                              <v-list-item-title v-html="item.title"></v-list-item-title>
                              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                              <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                            </v-list-item-action>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list>
                  <v-toolbar flat class="mt-n5">
                    <v-toolbar-title>Recomdation Friend</v-toolbar-title>
                  </v-toolbar>
                  <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-avatar rounded size="40" class="mr-2">
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                    </v-avatar>
                    <strong>친구1</strong>
                    <v-spacer></v-spacer>
                    <v-btn text color="orange">Add</v-btn>
                  </v-app-bar>
                  <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-avatar rounded size="40" class="mr-2">
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>
                    <strong>친구2</strong>
                    <v-spacer></v-spacer>
                    <v-btn text color="orange">Add</v-btn>
                  </v-app-bar>
                </v-card>
        </v-col>
      </v-row>

      <v-bottom-navigation
        :value="value"
        color="teal"
        grow
      >
        <v-btn>
          <span>Recents</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn>
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn>
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>

    </v-container>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    items: [
        { header: '오늘의 글' },
        {
          title: `<strong>게시글 제목</strong>`,
          money: '게시글 내용',
          subtitle: `작성자`,
        },
       
       {
          title: `<strong>게시글 제목</strong>`,
          money: '게시글 내용',
          subtitle: `작성자`,
        },
         {
          title: `<strong>게시글 제목</strong>`,
          money: '게시글 내용',
          subtitle: `작성자`,
        },
         {
          title: `<strong>게시글 제목</strong>`,
          money: '게시글 내용',
          subtitle: `작성자`,
        },
         {
          title: `<strong>게시글 제목</strong>`,
          money: '게시글 내용',
          subtitle: `작성자`,
        },
         {
          title: `<strong>게시글 제목</strong>`,
          money: '게시글 내용',
          subtitle: `작성자`,
        },
      ],
      files :[
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          action: '15 min',
          headline: 'Brunch this weekend?',
          subtitle: `쪽지 미리보기`,
          title: `<strong>친구1 (13)</strong>`,
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          action: '2 hr',
          headline: 'Summer BBQ',
          subtitle: `쪽지 미리보기`,
          title: `<strong>친구2 (19)</strong>`,
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          action: '6 hr',
          headline: 'Oui oui',
          subtitle: '쪽지 미리보기',
          title: `<strong>친구3 (7)</strong>`,
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          action: '12 hr',
          headline: 'Birthday gift',
          subtitle: '쪽지 미리보기',
          title: `<strong>친구4 (12)</strong>`,
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          action: '18hr',
          headline: 'Recipe to try',
          subtitle: '쪽지 미리보기',
          title: `<strong>친구5 (8)</strong>`,
        },
      ],
  })
 
}
</script>
<style scoped>
.borderLeft{
border-radius: 50px 0px 50px 0px !important;
}
.borderRight{
  border-radius: 0px 50px 0px 50px !important;
}
.border{
  border: 2px solid white !important;
}
</style>
