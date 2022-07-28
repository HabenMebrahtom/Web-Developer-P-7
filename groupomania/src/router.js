import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./pages/LogIn.vue"
import SignUp from "./pages/SignUp.vue"
import landingPage from "./pages/LandingPage.vue"

const routes = [
     { path: "/signup", name: 'SignUp', component: SignUp },
     { path: "/login", name: 'LogIn', component: LogIn },
     { path: "/landingPage", name: 'landingPage', component: landingPage }
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;