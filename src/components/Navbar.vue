<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/users' }">
                Users
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/distributors' }">
                Distributors
            </b-navbar-item>
            <b-navbar-dropdown label="Products">
                <b-navbar-item tag="router-link" :to="{ path: '/products' }">
                    Products
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/products/groups' }">
                    Product Groups
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/products/import' }">
                    Batch Import
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/products/registration' }">
                    Registration and History
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="myTunes">
                <b-navbar-item tag="router-link" :to="{ path: '/mytunes/create' }">
                    View
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/mytunes/view' }">
                    Create
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item tag="router-link" :to="{ path: '/warranty-credit-request' }">
                Warranty Credit Requests
            </b-navbar-item>
            <b-navbar-dropdown label="Reports">
                <b-navbar-item tag="router-link" :to="{ path: '/warranty-report' }">
                    Warranty Credit Report
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/parts-used-report' }">
                    Parts Used Report
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/service-codes-reports' }">
                    Service Codes Report
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Admin">
                <b-navbar-item href="#">
                    Product Categories
                </b-navbar-item>
                <b-navbar-item href="#">
                    List of Values
                </b-navbar-item>
                <b-navbar-item href="#">
                    Email Templates
                </b-navbar-item>
                <b-navbar-item href="#">
                    Error Log
                </b-navbar-item>
                <b-navbar-item href="#">
                    Email Log
                </b-navbar-item>
                <b-navbar-item href="#">
                    My Profile
                </b-navbar-item>
                <b-navbar-item href="#">
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>