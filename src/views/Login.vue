<template>
<section class="hero is-medium background">
  <div class="hero-body">
    <div class="container">
      <div class="columns has-text-centered">
        <div class="column">
          <h1 class="is-size-1 has-text-white heading">Welcome!</h1>
          <section class="section is-small">
            <div class="columns is-vcentered">
            <div class="column">
              <p class="has-text-white">If you are a dealer or distributor and would like access to the DVO B2B portal please email admin@dvosuspension.com to get your account set up!</p>
            </div>
            <div class="column notification is-black">
              <b-field label="Email">
                  <b-input
                      v-model="email">
                  </b-input>
              </b-field>
              <b-field label="Password">
                  <b-input type="password" 
                  v-model="password">
                  </b-input>
              </b-field>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-dvogreen"
                  @click="login()">Login</button>
                </div>
                <div class="control">
                  <button class="button is-link is-dvodark">Forgot My Login</button>
                </div>
              </div>
              <p class="has-text-white">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
            </div>
          </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data(){
    return{
      email: null,
      password: null
    }
  },
  methods: {
    login(){
      console.log('email: ' + this.email + ' password: ' + this.password)
    }
  }
}
</script>

<style scoped>

h1 {
  font-family: 'Anton', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

</style>