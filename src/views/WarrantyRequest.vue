<template>
  <div class="container">
    <div class="notification is-dvodark">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="is-size-3">
            WARRANTY REQUEST FORM
          </h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="columns has-background-dvoalt">
            <div class="column">
              <b-field horizontal label="Primary Contact">
                <b-input v-model="name"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field horizontal label="Reference Number">
                <b-input v-model="name"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column has-background-dvoalt">
              <b-field horizontal label="Serial Number">
                <b-input v-model="name"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field horizontal label="Date of Purchase">
                <b-input v-model="name"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column has-background-dvoalt">
              <b-field horizontal label="Service Code 1">
                <b-select expanded v-model="name"></b-select>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field horizontal label="Service Code 2">
                <b-select expanded v-model="name"></b-select>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column has-background-dvoalt">
              <b-field horizontal label="Service Code 3">
                <b-select expanded v-model="name"></b-select>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field horizontal label="Service Code 4">
                <b-select expanded v-model="name"></b-select>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column has-background-dvoalt">
              <b-field horizontal label="Service Code 5">
                <b-select expanded v-model="name"></b-select>
              </b-field>
            </div>
          </div>
        </div>
        <div class="column">
          <p>This address will receive updates</p>
          <br>
          <p>For your internal reference</p>
          <div class="columns mt-4 is-centered">
            <div class="column has-text-centered">
              <button class="button is-medium is-dvogreen">Search</button>
            </div>
            <div class="column">
              <button class="button is-medium is-dvogrey">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered has-text-centered">
        <div class="column is-half">
          <b-field horizontal label="Comment">
            <b-input type="textarea"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="is-size-3">
            ITEMS USED FOR REPAIR
          </h1>
        </div>
      </div>
      <div class="columns is-centered has-background-dvoalt">
        <div class="column">
          <b-field horizontal label="Billing Contact">
            <b-input v-model="name"></b-input>
          </b-field>
        </div>
        <div class="column has-text-centered">
          <div class="mr-4">
          </div>
          <button class="button is-medium is-dvogreen mr-6">Add Item</button>
          <button class="button is-medium is-dvogrey ml-6">Search Item #</button>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-green-border">
          <div class="columns">
            <div class="column is-2">
              <p>Item Number</p>
            </div>
            <div class="column is-2">
              <p>Quantity</p>
            </div>
            <div class="column is-4">
              <p>Description</p>
            </div>
            <div class="column is-2">
              <p>Price</p>
            </div>
            <div class="column is-2">
              <p>Total Price</p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <div class="columns">
            <div class="column is-2">
              <p>Placeholder #</p>
            </div>
            <div class="column is-2">
              <p>Placeholder #</p>
            </div>
            <div class="column is-4">
              <p>Placeholder Desc</p>
            </div>
            <div class="column is-2">
              <p>Placeholder Price</p>
            </div>
            <div class="column is-1">
              <p>Placeholer Total Price</p>
            </div>
            <div class="column is-1">
              Trash
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-half is-offset-half">
          <div class="columns has-background-dvoalt">
            <div class="column is-half">
              <p>Parts Sub Total: </p>
            </div>
            <div class="column is-half">
              <p>$10.00</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <p>Landed %: </p>
            </div>
            <div class="column is-half">
              <p>$10.00</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <p>Labor Rate: </p>
            </div>
            <div class="column is-half">
              <p>$10.00</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <p>Oil: </p>
            </div>
            <div class="column is-half">
              <p>$10.00</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <p>Freight: </p>
            </div>
            <div class="column is-half">
              <p>$10.00</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <p>Total Credit: </p>
            </div>
            <div class="column is-half">
              <p>$10.00</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half is-offset-half">
              <button class="button is-medium is-dvogreen mr-6">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.is-green-border{
  border: 1px solid #82bc00;
}

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

.textarea {
  background-color : transparent; 
  color: white;
}

.select{
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