import { createRouter, createWebHistory } from 'vue-router'
import ListPage from './ListPage.vue'
import MapPage from './MapPage.vue'
import LoginPage from './LoginPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/map',
		},
		{
			path: '/map',
			name: 'map',
			component: MapPage,
		},
		{
			path: '/list',
			name: 'list',
			component: ListPage,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage,
		},
		{
			path: '/:notFound(.*)',
			redirect: '/map',
		},
	]
});

export default router;
