import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import UserPerfil from '../views/UserPerfil.vue'
import UserPosts from '../views/UserPosts.vue'
import Bitcoin from '../views/Bitcoin.vue'
import Blog from '../views/Blog.vue'
import Filme from '../views/Filme.vue'
import Carrinho from '../views/Carrinho.vue'
import CadastroUsuario from '../views/CadastroUsuario.vue'

Vue.use(VueRouter)

const routes = [
  // otherwise
  {
    path: '*',
    name: '404',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aula59',
    name: 'aula59',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/aula59_rota_dinamica.vue')
  },
  {
    path:'/user/:id', 
    name: 'user',
    component: User,
    children: [
      {
        path:'perfil',
        component:UserPerfil
      },
      {
        path:'posts',
        component:UserPosts
      }
    ]
  },
  {
    path: '/bitcoin',
    name: 'Bitcoin',
    component: Bitcoin
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/filme',
    name: 'Filmes',
    component: Filme
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho
  },
  {
    path: '/cadastro.usuario',
    name: 'Cadastro Usuário',
    component: CadastroUsuario
  },
]

const router = new VueRouter({
  routes
})

export default router
