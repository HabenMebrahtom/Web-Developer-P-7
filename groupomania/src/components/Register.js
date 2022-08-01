import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

import validation from './Validation';
import axios from 'axios';


function Register() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        setErrors(validation(values));

        try {
            const response = await axios.post('http://localhost:4000/api/auth/signup', {
                name: values.fullname,
                email: values.email,
                password: values.password
            });
            console.log(response.data);

            if (response.status === 201) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
       <section class="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black">
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form className="mx-1 mx-md-4">

                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="fullname">Your Name</label>                              
                                <input
                                    type="text"
                                    id="fullname"
                                    className="form-control"
                                    name='fullname'
                                    value={values.fullname}
                                    onChange={handleChange}
                                                    />
                                 {errors.fullname && <p className='text-danger'>{errors.fullname }</p>}                 
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                                {errors.email && <p className='text-danger'>{errors.email}</p>}                     
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" for="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                                    /> 
                                  {errors.password && <p className='text-danger'>{errors.password}</p>}                   
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                            </div>
                                    
                            </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src={require('../assets/icon-left-font.png')}
                            className="img-fluid" alt="groupomania logo" height="400"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}

export default Register