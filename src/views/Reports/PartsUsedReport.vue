<template>
  <div class="container is-fluid has-background-light">
    <div class="notification full">
      <h1>Parts used Page</h1>
      <b-field>
          <b-datepicker
              v-model="selected"
              show-week-number=true
              locale="en-US"
              placeholder="From..."
              trap-focus>
          </b-datepicker>
          <b-datepicker
              v-model="selected"
              show-week-number=true
              locale="en-US"
              placeholder="To..."
              trap-focus>
          </b-datepicker>
            <b-radio v-model="radio"
                name="name"
                native-value="Flint">
                Flint
            </b-radio>
            <b-radio v-model="radio"
                name="name"
                native-value="Silver">
                Silver
            </b-radio>
            <b-radio v-model="radio"
                name="name"
                native-value="Jack">
                Jack
            </b-radio> 
      </b-field>
      <b-field>
        <b-select placeholder="Product Type">
          <option>All Products</option>
        </b-select> 
      </b-field>
        <b-button>Search</b-button>              

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>