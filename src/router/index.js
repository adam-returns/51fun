import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import EatMelon from '../components/EatMelonToday.vue'
import Contact from '../components/Contact.vue'
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
        path: '/contact', components: {
            default: Contact,
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