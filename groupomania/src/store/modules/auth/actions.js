import { SIGNUP_ACTION } from "@/store/storeConstant";
import axios from 'axios'

export default {
   async [SIGNUP_ACTION](_, payload) {
        let postaData = {
            name: payload.name,
            email: payload.email,
            password: payload.password
        }

        const response = await axios.post('http://localhost:4000/api/auth/signup', postaData);
        console.log(response.data)
    }
}