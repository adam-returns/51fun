import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import EatMelon from "../views/EatMelonToday.vue"
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/eatmelon',
        name:'EatMelon',
        component:EatMelon
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router