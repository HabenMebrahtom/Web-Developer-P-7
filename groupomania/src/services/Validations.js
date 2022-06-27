export default class Validations {
    static checkEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            return (true)
            }
         return (false)
    }
    
    static minLength(name, minLength) {
        if (name.length < minLength) {
            return false
        }

        return true
    }
   }