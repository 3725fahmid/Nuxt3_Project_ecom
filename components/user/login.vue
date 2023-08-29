<template>
    <div>
      <Navbar/>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <h2 class="title has-text-centered">Welcome back!</h2>
  
              <Notification :message="error" v-if="error"/>
  
              <form method="post" @submit.prevent="loginUser">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      class="input"
                      name="email"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      type="password"
                      class="input"
                      name="password"
                      v-model="password"
                    />
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-dark is-fullwidth">Log In</button>
                </div>
              </form>
              <div class="has-text-centered" style="margin-top: 20px">
                <p>
                  Don't have an account? <nuxt-link to="/auth/register">Register</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    middleware: 'guest',
    data() {
      return {
        email: this.email,
        password: this.password,
        error: null
      }
    },
  
    methods: {
      loginUser() {
        this.$auth.loginWith('local', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.log('Response: ',response)
            localStorage.setItem('token', response.data.access_token)
            this.$store.state.localStorage.token = response.data.access_token
          })
          this.$router.push('/')
      },
      async login() {
        try {
          await this.$axios.post('auth/login', {
            email: this.email,
            password: this.password
          }).then(response => {
            localStorage.setItem('token', response.data.access_token)
            this.$store.state.localStorage.token = response.data.access_token
          })
  
          this.$router.push('/')
        } catch (e) {
          this.error = e.response.message
        }
      }
    }
  }
  </script>