import Vue from 'vue'
import VueRouter from "vue-router"

import Home from '@/components/home/Home'
import Aluno from '@/components/aluno/Aluno'

// registro do vue-router
Vue.use(VueRouter)

// rotas do app
const routes = [{

    name: 'home',
    path: '/',
    component: Home

}, {
    name: 'aluno',
    path: '/alunos',
    component: Aluno
}]

export default new VueRouter({
    mode: 'history',
    routes: routes
});