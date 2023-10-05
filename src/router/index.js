import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import EatMelon from '../components/EatMelonToday.vue'
import DailyMelon from '../components/DailyMelon.vue'
import PopularBigMelon from '../components/PopularBigMelon.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'

const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/eatmelon', components: {
            default: EatMelon,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/dailymelon', components: {
            default: DailyMelon,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/popularbigmelon', components: {
            default: PopularBigMelon,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/posts', components: {
            default: Posts,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/posts/:id', components: {
            default: Post,
            LeftSideBar: Sidebar
        },
        name: 'post',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router