<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="Main Logo.png"
                    alt="DVO Suspension Logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/distributors' }">
                Distributor
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/distributors' }">
                Service
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/distributors' }">
                Sales
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/account' }">
                Account
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
.navbar-item{
    font-family:  'Anton', sans-serif;
}
</style>