import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./pages/LogIn.vue"
import SignUp from "./pages/SignUp.vue"

const routes = [
    { path: "/signup", name: 'SignUp', component: SignUp },
      { path: "/login", name: 'LogIn', component: LogIn }
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;