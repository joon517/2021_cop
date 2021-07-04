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
            </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
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
    }),

    methods: {
      login () {
        this.$refs.form.login()
      },
      SignUp () {
        this.$refs.form.SignUp()
      },
    },
  }
</script>