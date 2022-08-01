import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import validation from './Validation';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

     const handleChange = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setErrors(validation(values))

        const response = await axios.post('http://localhost:4000/api/auth/login', {
            email: values.email,
            password: values.password
        });
        console.log(response.data);

         if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.id)
                navigate('/landingpage')
            }
    }

    
  return (
       <section class="vh-100  bg-secondary">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow-2-strong">
                <div class="card-body p-5 text-center">

                    <h3 class="mb-5">Sign in</h3>

                    <div class="form-outline mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control form-control-lg"
                        placeholder='Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-danger'>{errors.email}</p>}        
                    </div>

                    <div class="form-outline mb-4">
                        <input
                            type="password"
                            id="password"
                            class="form-control form-control-lg"
                            placeholder='Password'
                            name= 'password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className='text-danger'>{errors.password}</p>} 
                    </div>

                    <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>

                </div>
                </div>
            </div>
            </div>
        </div>
</section>
  )
}

export default Login