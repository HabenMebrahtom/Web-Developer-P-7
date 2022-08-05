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
             localStorage.setItem('user', JSON.stringify(response.data));
             localStorage.setItem('token', JSON.stringify(response.data.token));
             navigate('/home');
             window.location.reload()
            }
    }

    
  return (
       <section className="vh-100  bg-secondary">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">

                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder='Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-danger'>{errors.email}</p>}        
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder='Password'
                            name= 'password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className='text-danger'>{errors.password}</p>} 
                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>

                </div>
                </div>
            </div>
            </div>
        </div>
</section>
  )
}

export default Login