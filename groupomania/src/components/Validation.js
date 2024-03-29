function Validation(values) {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = "Full name is required"
    }

     if (!values.email) {
        errors.email= "Email is required"
     } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
         errors.email = "Email is invalid"
    }


    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length <= 6) {
        errors.password = 'Password must be more than 5 characters'
    } 


    return errors;
}

export default Validation