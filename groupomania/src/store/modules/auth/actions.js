import { Axios } from "axios"

export default {
    async signup(context, payload) {
        const postData = {
            email: payload.email,
            password: payload.password, 
            returnSecureToken: true
        }
        await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=
AIzaSyC0uXkDDQxMjRDJzheZ__lbIfrrfvyYnss`, postData)
    }
}