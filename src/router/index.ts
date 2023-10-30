import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import { useStudentStore } from '../stores/student'
import StudentService from '../services/StudentService'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/announcement',
      name: 'announcement-page',
      component: 
    },
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/students',
      name: 'student-list',
      component:,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1'),
        perPage: parseInt((route.query?.perPage as string) || '6')
      })
    }
  ]})