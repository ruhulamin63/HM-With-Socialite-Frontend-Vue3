import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

import Home from '@/pages/HomePage.vue';
import ManageHotels from '@/pages/hotels/ManageHotels.vue';
import PropertyDetails from '@/pages/hotels/PropertyDetails.vue';
import CreateHotel from '@/pages/hotels/CreateHotel.vue';
import EditHotel from '@/pages/hotels/EditHotel.vue';
import Login from '@/pages/auth/LoginPage.vue';
import Register from '@/pages/auth/RegisterPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/manage-hotels',
    name: 'ManageHotels',
    component: ManageHotels,
    meta: { requiresAuth: true },
  },
  {
    path: '/property/:id',
    name: 'PropertyDetails',
    component: PropertyDetails,
    meta: { requiresAuth: true },
  },
  {
    path: '/create-hotel',
    name: 'CreateHotel',
    component: CreateHotel,
    meta: { requiresAuth: true },
  },
  {
    path: '/edit-hotel/:id',
    name: 'EditHotel',
    component: EditHotel,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.accessToken;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;