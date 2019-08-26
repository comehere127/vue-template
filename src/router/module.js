export default [
  {
    path: '/',
    component: resolve => import('@/view/Home.vue').then(resolve)
  }
]
