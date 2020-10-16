import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users'
import Products from '../views/Products/Products'
import ProductGroups from '../views/Products/ProductGroups'
import Import from '../views/Products/Import'
import Query from '../views/Products/Query'
import WarrantyCreditRequest from '../views/WarrantyCreditRequest'
import PartsUsedReport from '../views/Reports/PartsUsedReport'
import ServiceCodes from '../views/Reports/ServiceCodes'
import WarrantyReport from '../views/Reports/WarrantyReport'
import Distributors from '../views/Distributors'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/distributors',
    name: 'Distributors',
    component: Distributors
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/groups',
    name: 'ProductGroups',
    component: ProductGroups
  },
  {
    path: '/products/import',
    name: 'Import',
    component: Import
  },
  {
    path: '/products/registration',
    name: 'Query',
    component: Query
  },
  {
    path: '/warranty-credit-request',
    name: 'WarrantyCreditRequest',
    component: WarrantyCreditRequest
  },
  {
    path: '/parts-used-report',
    name: 'PartsUsedReport',
    component: PartsUsedReport
  },
  {
    path: '/service-codes-reports',
    name: 'ServiceCodes',
    component: ServiceCodes
  },
  {
    path: '/warranty-report',
    name: 'WarrantyReport',
    component: WarrantyReport
  }
]

const router = new VueRouter({
  routes
})

export default router
