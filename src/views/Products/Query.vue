<template>
  <div class="container is-fluid">
    <div class="columns">
        <div class="column has-text-centered">
            <h1 class="is-size-4">Query Page</h1>
            <h2> Test 2 Test 2</h2>
        </div>
    </div>
    <div class="columns">
        <div class="column is-one-third">
            <section>
                <b-field>
                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Users"
                        type="is-danger">
                        <b-icon icon="close"></b-icon>
                        <span>Users</span>
                    </b-checkbox-button>

                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Purchases"
                        type="is-success">
                        <b-icon icon="check"></b-icon>
                        <span>Purchases</span>
                    </b-checkbox-button>

                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Product Groups">
                        Product Groups
                    </b-checkbox-button>
                </b-field>
            </section>
            <section>
                <b-field>
                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Parts"
                        type="is-danger">
                        <b-icon icon="close"></b-icon>
                        <span>Parts</span>
                    </b-checkbox-button>

                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Services"
                        type="is-success">
                        <b-icon icon="check"></b-icon>
                        <span>Services</span>
                    </b-checkbox-button>

                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Warranties">
                        Warranties
                    </b-checkbox-button>

                    <b-checkbox-button v-model="checkboxGroup"
                        native-value="Products">
                        Products
                    </b-checkbox-button>
                </b-field>
                <p class="content">
                    <b>Selection:</b>
                    {{ checkboxGroup }}
                </p>
            </section>
        </div>
        <div class="column is-two-thirds">
        <button @click="createRocks()">Change the data</button>
        <button @click="saveReport()">Save your report</button>
        <div ref="wdrComponent"></div>
        </div>
    </div>
  </div>
</template>

<script>
import WebDataRocks from 'webdatarocks'
export default {
    data() {
        return {
            checkboxGroup: [],
            report: null,
            source: 'https://cdn.webdatarocks.com/data/data.csv'
        }
    },
    methods:{
    createRocks(){
      console.log('running')
            this.report = new WebDataRocks({
            container: this.$refs.wdrComponent,
            toolbar: true,
            height: 380,
            width: "100%",
            report: {
                "dataSource": {
                    "dataSourceType": "json",
                    "filename": 'https://jsonplaceholder.typicode.com/posts'
                },
                "options":{
                    "grid": {
                        "type": "flat"
                    }
                },
            }
        })
    },
    getData(){
        return [
            {
        "id": 1,
        "employee_name": "Tiger Nixon",
        "employee_salary": 320800,
        "employee_age": 61,
        "profile_image": ""
        },
        {
        "id": 2,
        "employee_name": "Garrett Winters",
        "employee_salary": 170750,
        "employee_age": 63,
        "profile_image": ""
        },
        {
        "id": 3,
        "employee_name": "Ashton Cox",
        "employee_salary": 86000,
        "employee_age": 66,
        "profile_image": ""
        },
        {
        "id": 4,
        "employee_name": "Cedric Kelly",
        "employee_salary": 433060,
        "employee_age": 22,
        "profile_image": ""
        },
        {
        "id": 5,
        "employee_name": "Airi Satou",
        "employee_salary": 162700,
        "employee_age": 33,
        "profile_image": ""
        },
        {
        "id": 6,
        "employee_name": "Brielle Williamson",
        "employee_salary": 372000,
        "employee_age": 61,
        "profile_image": ""
        },
        {
        "id": 7,
        "employee_name": "Herrod Chandler",
        "employee_salary": 137500,
        "employee_age": 59,
        "profile_image": ""
        },
        {
        "id": 8,
        "employee_name": "Rhona Davidson",
        "employee_salary": 327900,
        "employee_age": 55,
        "profile_image": ""
        },
        {
        "id": 9,
        "employee_name": "Colleen Hurst",
        "employee_salary": 205500,
        "employee_age": 39,
        "profile_image": ""
        },
        {
        "id": 10,
        "employee_name": "Sonya Frost",
        "employee_salary": 103600,
        "employee_age": 23,
        "profile_image": ""
        },
        {
        "id": 11,
        "employee_name": "Jena Gaines",
        "employee_salary": 90560,
        "employee_age": 30,
        "profile_image": ""
        },
        {
        "id": 12,
        "employee_name": "Quinn Flynn",
        "employee_salary": 342000,
        "employee_age": 22,
        "profile_image": ""
        },
        {
        "id": 13,
        "employee_name": "Charde Marshall",
        "employee_salary": 470600,
        "employee_age": 36,
        "profile_image": ""
        }
       ]
    },
    saveReport() {
        this.report.save({
          filename: 'reportingResults.json'
        })
      }
    },
    mounted() {
        this.report = new WebDataRocks({
            container: this.$refs.wdrComponent,
            toolbar: true,
            height: 380,
            width: "100%",
            report: {
                "dataSource": {
                    "dataSourceType": "csv",
                    "filename": this.source
                },
                "slice": {
                    "rows": [
                        {
                            "uniqueName": "Country"
                        },
                        {
                            "uniqueName": "Category"
                        }
                    ],  
                    "columns": [
                        {
                            "uniqueName": "Business Type"
                        },
                        {
                            "uniqueName": "Measures"
                        }
                    ],
                    "measures": [
                        {
                            "uniqueName": "Price",
                            "aggregation": "sum"
                        }
                    ]
                },
            "conditions": [
                    {
                        "formula": "#value > 2000000",
                        "measure": "Price",
                        "format": {
                            "backgroundColor": "#0598df",
                            "color": "#FFFFFF",
                            "fontFamily": "Arial",
                            "fontSize": "12px"
                        }
                    }
                ]
            },

        })
    }
}
</script>

<style>

</style>