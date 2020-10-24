<template>
  <section class="section is-small">
    <div class="container">
      <div class="notification is-dvodark">
          <div class="columns is-centered">
              <div class="column is-one-fifth is-offset-two-fifths has-text-centered">
                  <h1 class="is-size-3">
                      WARRANTY CREDIT REQUESTS
                  </h1>
              </div>
              <div class="column is-one-fifth is-offset-one-fifth">
                  <button class="button is-dvogreen">Create New Request</button>
              </div>
          </div>
          <section>
              <b-table
                :data="data"
                :columns="columns"
                :paginated=true
                :per-page="perPage"
                :current-page="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="user.first_name"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
                :debounce-search="1000">
              </b-table>
          </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 5,
      data: [
          { 'date_created': 1, 'request_id': 'Jesse', 'reference_number': 'Simmons', 'owner': '2016-10-15 13:43:27', 'product': 'Male', 'status': 'Approved' },
          { 'date_created': 2, 'request_id': 'John', 'reference_number': 'Jacobs', 'owner': '2016-12-15 06:00:53', 'product': 'Male', 'status': 'Approved' },
          { 'date_created': 3, 'request_id': 'Tina', 'reference_number': 'Gilbert', 'owner': '2016-04-26 06:26:28', 'product': 'Female', 'status': 'Approved'},
          { 'date_created': 4, 'request_id': 'Clarence', 'reference_number': 'Flores', 'owner': '2016-04-10 10:28:46', 'product': 'Male', 'status': 'Approved' },
          { 'date_created': 5, 'request_id': 'Anne', 'reference_number': 'Lee', 'owner': '2016-12-06 14:38:38', 'product': 'Female', 'status': 'Approved' }
      ],
      columns: [
          {
              field: 'date_created',
              label: 'Date Created',
              width: '100',
              searchable: true,
          },
          {
              field: 'request_id',
              label: 'Request Id',
              searchable: true,
          },
          {
              field: 'reference_number',
              label: 'Reference Number',
              searchable: true,
          },
          {
              field: 'owner',
              label: 'Owner',
              searchable: true,
          },
          {
              field: 'product',
              label: 'Product',
              searchable: true,
          },
          {
              field: 'status',
              label: 'Status',
              searchable: true,
          }
      ]
    }
  }
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