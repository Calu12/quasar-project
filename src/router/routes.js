const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path : 'test', component: () => import('pages/TestPage.vue') }
    ]
  },

  {
    path: '/tp',
    component: () => import('layouts/CustomLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path : 'test', component: () => import('pages/TestPage.vue') },
      { path : 'todo', component: () => import('pages/ToDoPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
