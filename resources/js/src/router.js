import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    // mode: process.env.NODE_ENV != 'development'?'history':'hash',
    // base: process.env.NODE_ENV != 'development'?'/admin':'/',
    mode: 'hash',
    base: '/admin',
    routes: [

      {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
        path: '/',
        component: () => import('./layouts/main/Main.vue').then(m =>m.default || m),
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/dashboard',
            name: 'home',
            component: () => import('./views/Home.vue'),
          },
          {
            path: '/all-sponsors',
            name: 'All Sponsors',
            component: () => import('./views/Sponsors.vue'),
          },
          {
            path: '/approved-sponsors',
            name: 'Approved Sponsors',
            component: () => import('./views/Sponsors.vue'),
          },
          {
            path: '/un-approved-sponsors',
            name: 'Un Approved Sponsors',
            component: () => import('./views/Sponsors.vue'),
          },
          {
            path: '/expired-sponsors',
            name: 'Expired Sponsors',
            component: () => import('./views/Sponsors.vue'),
          },
          {
            path: '/subscriber',
            name: 'subscriber',
            component: () => import('./views/Subscriber.vue').then(m =>m.default || m),
          },
          {
            path: '/all-resources',
            name: 'Resources',
            component: () => import('./views/Resources/Resources.vue').then(m =>m.default || m),
          },
          {
            path: '/enabled-resources',
            name: 'Enabled Resources',
            component: () => import('./views/Resources/Resources.vue').then(m =>m.default || m),
          },
          {
            path: '/disabled-resources',
            name: 'Disabled Resources',
            component: () => import('./views/Resources/Resources.vue').then(m =>m.default || m),
          },
          {
            path: '/administrators',
            name: 'Administrators',
            component: () => import('./views/Admin.vue').then(m =>m.default || m),
          },
          {
            path: '/sale-representatives',
            name: 'Sale Representatives',
            component: () => import('./views/SaleRepresentatives.vue').then(m =>m.default || m),
          },
          {
            path: '/brands',
            name: 'Brands',
            component: () => import('./views/Brands.vue').then(m =>m.default || m),
          },
          {
            path: '/categories',
            name: 'Categories',
            component: () => import('./views/Categories/Categories.vue').then(m =>m.default || m),
          },
          {
            path: '/sub-categories',
            name: 'Sub Categories',
            component: () => import('./views/Categories/SubCategories.vue').then(m =>m.default || m),
          },
          {
            path: '/industries',
            name: 'Industries',
            component: () => import('./views/Industries.vue').then(m =>m.default || m),
          },
          {
            path: '/account-detail/:id',
            name: 'Account Detail',
            component: () => import('./views/AccountDetail.vue').then(m =>m.default || m),
            props : true,
          },
          {
            path: '/resource-detail/:id',
            name: 'Resource Detail',
            component: () => import('./views/Resources/ResourceDetail.vue').then(m =>m.default || m),
            props : true,
          },
          {
            path: '/edit-resource/:id',
            name: 'Edit Resource',
            component: () => import('./views/Resources/EditResource.vue').then(m =>m.default || m),
            props : true,
          },
          {
            path: '/add-resource/:id',
            name: 'Add Resource',
            component: () => import('./views/Resources/AddResource.vue').then(m =>m.default || m),
            props : true,
          },
          {
            path: '/products-detail/:id',
            name: 'Product Detail',
            component: () => import('./views/Products/ProductsDetail.vue').then(m =>m.default || m),
            props : true,
          },

        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
      // =============================================================================
      // PAGES
      // =============================================================================
          {
            path: '/pages/login',
            name: 'pageLogin',
            component: () => import('@/views/pages/Login.vue')
          },
          {
            path: '/pages/error-404',
            name: 'pageError404',
            component: () => import('@/views/pages/Error404.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/pages/error-404'
      }
    ],
})

export default router
