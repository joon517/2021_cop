<template>
  <v-app :style="{background: $vuetify.theme.themes.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>

                <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                ></v-text-field>

                <v-btn
                :disabled="!valid"
                color="gray"
                class="mr-4"
                @click="login"
                >
                Login
                </v-btn>

                <v-btn
                color="gray"
                @click="SignUp"
                >
                Sign Up
                </v-btn>

                <v-btn
                color="gray"
                @click="Kakao"
                >
                Kakao Login
                </v-btn>
            </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be valid',
      ],
      userId: '',
      // password: '',
    }),

    methods: {
      login () {
        // this.$refs.form.login()
        axios.post(`app/v1/auth/normal`, {
          userId: this.userId,
          password: this.password
          })
          .then(res => console.log(res))
      },
      SignUp () {
        this.$refs.form.SignUp()
      },
      Kakao () {
        axios.get(`app/v1/auth/kakao`)
          .then(res => console.log(res))
      },
    },
  }
</script>