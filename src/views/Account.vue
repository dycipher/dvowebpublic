<template>
  <div class="container">
      <div class="notification is-dvodark">
          <div class="columns is-centered">
              <div class="column is-one-fifth is-offset-two-fifths has-text-centered">
                  <h1 class="is-size-3">
                      MY ACCOUNT
                  </h1>
              </div>
              <div class="column is-one-fifth is-offset-one-fifth">
                  <button class="button is-dark">Logout</button>
              </div>
          </div>
          <div class="container has-background-dvoalt">
              <div class="columns is-centered">
                  <div class="column">
                      <b-field horizontal label="First Name">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Last Name">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvodark">
                  <div class="column">
                      <b-field horizontal label="New Password">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Re-type new Password">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns has-background-dvoalt">
                  <div class="column is-half">
                      <b-field horizontal label="My Email">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvodark has-text-centered">
                  <div class="column is-one-fifth ">
                    <button class="button is-medium is-dvogreen">Update</button>
                  </div>
              </div>
          </div>
          <section class="section is-small">
              <div class="columns has-text-centered">
                  <div class="column">
                        <h1 class="is-size-3">DEFAULT RATES</h1>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvoalt">
                  <div class="column">
                      <b-field horizontal label="Discount">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Landed">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns">
                  <div class="column is-half">
                      <b-field horizontal label="Labor Rate">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
          </section>
          <section class="section is-small">
              <div class="columns has-text-centered">
                  <div class="column">
                        <h1 class="is-size-3">MY COMPANY</h1>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvoalt">
                  <div class="column">
                      <b-field horizontal label="Company Name">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Account Number">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
                <div class="columns is-centered">
                  <div class="column">
                      <b-field horizontal label="Status">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Date Created">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvoalt">
                  <div class="column">
                      <b-field horizontal label="Distributor Type">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Service Center">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered">
                  <div class="column">
                      <b-field horizontal label="Phone Number">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Fax Number">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvoalt">
                  <div class="column">
                      <b-field horizontal label="Main Contact">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Main Contact Email">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered">
                  <div class="column">
                      <b-field horizontal label="Billing Contact">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Billing Email">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvoalt">
                  <div class="column">
                      <b-field horizontal label="Sales Contact">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
                  <div class="column">
                      <b-field horizontal label="Sales Email">
                          <b-input v-model="name"></b-input>
                      </b-field>
                  </div>
              </div>
              <div class="columns is-centered has-background-dvodark has-text-centered">
                  <div class="column is-one-fifth ">
                    <button class="button is-medium is-dvogreen">Update</button>
                  </div>
              </div>
          </section>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>

.field-label .label {
    color: #82bc00 !important;
    font-size: 0.8em;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
}

input[type="text"], textarea {
  background-color : transparent; 
  color: white;
}


h1 {
  font-family: 'Anton', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}
</style>