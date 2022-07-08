  <template>
    <section class="vh-100 ">
      <div class="container-fluid  h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card text-dark" >
              <div class="card-body p-5 text-center">
                <div class="mb-md-3 mt-md-2 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-dark-50 mb-5">Please enter your email and password!</p>
                  <form @submit.prevent="onLogin()">
                      <div class="form-outline form-white mb-4">
                        <input 
                          type="email"
                          name="email" 
                          id="email"
                          class="form-control form-control-lg" 
                          placeholder="Email"
                          v-model="email"/>
                          <p class="error" v-if="errors.email">{{errors.email}}</p>
                      </div>
                      
                      <div class="form-outline form-white mb-4">
                        <input 
                           type="password"
                           name="password"
                           id="password"
                           class="form-control form-control-lg"
                           placeholder="Password"
                           v-model="password"/>
                          <p class="error" v-if="errors.password">{{errors.password}}</p>
                      </div>
                     
                      <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                  </form>
                </div>
                <div>
                  <p class="mb-0">Don't have an account? <router-link to="/" class="text-primary text-decoration-none">Sign up</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style>
     .card {
          border-radius: 10px;
          background-color: rgba(61, 3, 40, 0.365);
     }

     .btn:hover {
      background-color: blue;
      color: white;
     }


     .error {
      color: red;
     }
</style>

<script>

import axios from 'axios';
import Validations from '../services/Validations.js'
 
export default {

  data() {
    return {
         errors: [],
         email: '',
         password: '',
       }
  },
  methods: {
    onLogin() {

        if(!this.email) {
             this.errors['email'] = 'Email Required';
        } else if(!Validations.checkEmail(this.email)) {
            this.errors['email'] = 'Invalid Email';
      }

        if(!this.password) {
            this.errors['password'] = 'Password Required';
        } else if (!Validations.minLength(this.password, 6)) {
            this.errors['password'] = "Your password must be more than 6 characters";
      }

        
      if ('email' in this.errors || 'password' in this.errors) {
         return false
      }


        let user = {
          email: this.email,
          password: this.password
      }
        
        axios.post(`http://localhost:4000/api/auth/login`, user)
          .then(res => {
            console.log(res)
          }, error => {
            console.log(error.response)
          }) 
      }
        }
      }
  
</script>