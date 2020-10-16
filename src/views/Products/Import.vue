<template>
  <div class="container is-fluid has-background-light">
    <div class="notification full">
      <h1>Import Page</h1>
      <b-field>
        <b-select placeholder="Product Type">
          <option>USA</option>
        </b-select> 
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
        <b-select placeholder="Status">
          <option>USA</option>
        </b-select>   
        <b-button>Search</b-button>              
      </b-field>
    <section>
      <b-table :data="data" :columns="columns"></b-table>
    </section>
    <b-button>New Item</b-button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      data: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
      ],
    columns: [
          {
              field: 'id',
              label: 'ID',
              width: '40',
              numeric: true
          },
          {
              field: 'first_name',
              label: 'First Name',
          },
          {
              field: 'last_name',
              label: 'Last Name',
          },
          {
              field: 'date',
              label: 'Date',
              centered: true
          },
          {
              field: 'gender',
              label: 'Gender',
          }
      ]
    }
  }
}
</script>

<style>

</style>