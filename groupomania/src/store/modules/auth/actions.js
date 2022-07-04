import { Axios } from "axios"

export default {
    async signup(context, payload) {
        const postData = {
            email: payload.email,
            password: payload.password, 
            returnSecureToken: true
        }
        await Axios.post(``, postData)
    }
}