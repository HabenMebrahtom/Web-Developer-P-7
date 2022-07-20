import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./pages/LogIn.vue"
import SignUp from "./pages/SignUp.vue"
import LandingPage from "./pages/LandingPage.vue"
import forum from "./pages/OpenForum.vue"

const routes = [
     { path: "/", name: 'LandingPage', component: LandingPage },
     { path: "/signup", name: 'SignUp', component: SignUp },
     { path: "/login", name: 'LogIn', component: LogIn },
     { path: "/forum", name: 'forum', component: forum }
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;