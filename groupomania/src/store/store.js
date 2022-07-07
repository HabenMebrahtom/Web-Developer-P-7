import { createStore } from "vuex";
import auth from './modules/auth/index.js'

const store = createStore({
    modules: {
        auth,
    },
})

export default store;