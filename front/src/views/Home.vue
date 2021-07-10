<template>
  <!-- <v-app :style="{background: $vuetify.theme.themes.light.background}"> -->
    <v-container fluid>
      <!-- <v-row>
        <v-col cols="12" sm="12"> -->
          <!-- <div> -->
            <v-system-bar
              color="white"
              style="height: 30px;"
            ></v-system-bar>
            <hr>
            <v-toolbar
              color="white"
              cards
              dark
              flat
            >
              <v-btn
                text
                color="black"
              >
                
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="black"
              >
                게시판명
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="black"
              >
                
              </v-btn>
            </v-toolbar>
            <hr>
            <br>
          <!-- <v-card class="mb-2 pa-1 borderLeft" color="#808080">
            <v-toolbar color="#808080" dark flat>
              <v-tabs align-with-title>
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab>
                  <v-btn dark icon>
                    <v-icon>fas fa-home</v-icon>
                  </v-btn>
                </v-tab>
              </v-tabs>
            </v-toolbar>
          </v-card> -->
          <v-card class="rounded-xl">
            <!-- <v-list three-line> -->
              <template v-for="(board1) in board1">
                <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
                <v-list-item v-else :key="board1.title">
                  <!-- <v-list-item-avatar color="#EFF4F1" size="70" rounded>
                    <img :src="item.avatar" />
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title class="v-list-item-title" v-html="board1.title"></v-list-item-title>
                    <v-list-item-title v-html="board1.money"></v-list-item-title>
                    <v-list-item-subtitle v-html="board1.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn class="ma-2" text icon color="gray" >
                    <v-icon large color="gray" style="font-size: 28px">
                      mdi-menu
                    </v-icon>
                  </v-btn>
                </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
                <v-btn class="ma-2" text icon color="gray">
                  <v-icon large color="gray" style="font-size: 23px">mdi-tag</v-icon>
                </v-btn><font size="3em" color="blue">작성자 닉네임</font>
              </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-up</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-down</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-message-text
                </v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-bookmark
                </v-icon>
              </v-btn>북마크
              </v-list-item>
            </template>
          </v-card>
          <br>
          <v-card class="rounded-xl">
            <!-- <v-list three-line> -->
              <template v-for="(board1) in board1">
                <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
                <v-list-item v-else :key="board1.title">
                  <!-- <v-list-item-avatar color="#EFF4F1" size="70" rounded>
                    <img :src="item.avatar" />
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title class="v-list-item-title" v-html="board1.title"></v-list-item-title>
                    <v-list-item-title v-html="board1.money"></v-list-item-title>
                    <v-list-item-subtitle v-html="board1.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn class="ma-2" text icon color="gray" >
                    <v-icon large color="gray" style="font-size: 28px">
                      mdi-menu
                    </v-icon>
                  </v-btn>
                </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
                <v-btn class="ma-2" text icon color="gray">
                  <v-icon large color="gray" style="font-size: 23px">mdi-tag</v-icon>
                </v-btn><font size="3em" color="blue">작성자 닉네임</font>
              </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-up</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-down</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-message-text
                </v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-bookmark
                </v-icon>
              </v-btn>북마크
              </v-list-item>
            </template>
          </v-card>
          <br>
          <v-card class="rounded-xl">
            <!-- <v-list three-line> -->
              <template v-for="(board1) in board1">
                <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
                <v-list-item v-else :key="board1.title">
                  <!-- <v-list-item-avatar color="#EFF4F1" size="70" rounded>
                    <img :src="item.avatar" />
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title class="v-list-item-title" v-html="board1.title"></v-list-item-title>
                    <v-list-item-title v-html="board1.money"></v-list-item-title>
                    <v-list-item-subtitle v-html="board1.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn class="ma-2" text icon color="gray" >
                    <v-icon large color="gray" style="font-size: 28px">
                      mdi-menu
                    </v-icon>
                  </v-btn>
                </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
                <v-btn class="ma-2" text icon color="gray">
                  <v-icon large color="gray" style="font-size: 23px">mdi-tag</v-icon>
                </v-btn><font size="3em" color="blue">작성자 닉네임</font>
              </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-up</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-down</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-message-text
                </v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-bookmark
                </v-icon>
              </v-btn>북마크
              </v-list-item>
            </template>
          </v-card>
          <br>
          <v-card class="rounded-xl">
            <!-- <v-list three-line> -->
              <template v-for="(board1) in board1">
                <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
                <v-list-item v-else :key="board1.title">
                  <!-- <v-list-item-avatar color="#EFF4F1" size="70" rounded>
                    <img :src="item.avatar" />
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title class="v-list-item-title" v-html="board1.title"></v-list-item-title>
                    <v-list-item-title v-html="board1.money"></v-list-item-title>
                    <v-list-item-subtitle v-html="board1.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn class="ma-2" text icon color="gray" >
                    <v-icon large color="gray" style="font-size: 28px">
                      mdi-menu
                    </v-icon>
                  </v-btn>
                </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
                <v-btn class="ma-2" text icon color="gray">
                  <v-icon large color="gray" style="font-size: 23px">mdi-tag</v-icon>
                </v-btn><font size="3em" color="blue">작성자 닉네임</font>
                <!-- <font size="3em" color="blue">작성자 닉네임</font> -->
              </v-list-item>
              <v-subheader v-if="board1.header" :key="board1.header" v-text="board1.header"></v-subheader>
              <v-list-item v-else :key="board1.title">
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-up</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 24px">mdi-thumb-down</v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-message-text
                </v-icon>
              </v-btn>20
              <v-btn class="ma-2" text icon color="gray">
                <v-icon large color="gray" style="font-size: 25px">
                  mdi-bookmark
                </v-icon>
              </v-btn>북마크
              </v-list-item>
            </template>
          </v-card>
          <br>
        <!-- </v-col> -->


        <!-- <v-col cols="12" sm="4">
          <v-card class="mb-2 pa-1 borderRight" color="#808080">
            <v-toolbar color="#808080" dark flat>
              <v-avatar class="ml-14 mr-2 border" size="35">
                <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
              </v-avatar>
              <v-toolbar-title class="title white--text pl-0 mr-3">박시현</v-toolbar-title>
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
        </v-col>-->
      <!-- </v-row> -->
          <!-- </div> -->
      <v-bottom-navigation
        :value="value"
        color="white"
        grow
        style="position: fixed"
      >
        <v-btn>
          <!-- <span>Recents</span> -->
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn>
          <!-- <span>Favorites</span> -->
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-btn>
          <!-- <span>Nearby</span> -->
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-face</v-icon>
        </v-btn>
      </v-bottom-navigation>
<!-- </div> -->
    </v-container>
  <!-- </v-app> -->
</template>

<script>

export default {
  data: () => ({
    // items: [
    //     { header: '오늘의 글' },
    //     {
    //       title: `<strong>게시글 제목</strong>`,
    //       money: '게시글 내용',
    //       subtitle: `작성자`,
    //     },
       
    //    {
    //       title: `<strong>게시글 제목</strong>`,
    //       money: '게시글 내용',
    //       subtitle: `작성자`,
    //     },
    //      {
    //       title: `<strong>게시글 제목</strong>`,
    //       money: '게시글 내용',
    //       subtitle: `작성자`,
    //     },
    //      {
    //       title: `<strong>게시글 제목</strong>`,
    //       money: '게시글 내용',
    //       subtitle: `작성자`,
    //     },
    //      {
    //       title: `<strong>게시글 제목</strong>`,
    //       money: '게시글 내용',
    //       subtitle: `작성자`,
    //     },
    //      {
    //       title: `<strong>게시글 제목</strong>`,
    //       money: '게시글 내용',
    //       subtitle: `작성자`,
    //     },
    //   ],
      board1 :[
        {
          title: `<strong>제목입력</strong>`,
          money: '내용입력',
          subtitle: `두줄`,
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
  .v-list-item-title {
    color:blue;
  }
</style>
