import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import EatMelon from "../views/EatMelonToday.vue"
import Dailymelon from "../views/Dailymelon.vue"
import Popularmelon from "../views/PopularMelon.vue"
import Sidebar from '../components/SideBar.vue'
// const routes=[
//     {
//         path:'/',
//         name:'Home',
//         component:Home
//     },
//     {
//         path:'/eatmelon',
//         name:'EatMelon',
//         component:EatMelon
//     },
//     {
//         path:'/dailymelon',
//         name:'Dailymelon',
//         component:Dailymelon
//     },
//     {
//         path:'/popularbigmelon',
//         name:'PopularMelon',
//         component:Popularmelon
//     }

// ]

const routes =[
    {
        path:'/', components: {
            default:Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path:'/eatmelon', components: {
            default:EatMelon,
            LeftSideBar: Sidebar
        }
    },
    {
        path:'/dailymelon', components: {
            default:Dailymelon,
            LeftSideBar: Sidebar
        }
    },
    {
        path:'/popularbigmelon', components: {
            default:Popularmelon,
            LeftSideBar: Sidebar
        }
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router