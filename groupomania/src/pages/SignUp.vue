<template>
<section class="vh-100">
<div class="container py-3 h-100 ">
   <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
      <div class="card text-black bg-white">
         <div class="card-body p-md-4">
            <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
               <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
               <form class="mx-1 mx-md-4" @submit.prevent="onSignup()">
                  <div class="form-outline flex-fill mb-4">
                     <input 
                        type="text" 
                        id="fullName" 
                        class="form-control" 
                        v-model="name"
                        placeholder="Full name" />
                     <p class="error" v-if="errors.name">{{errors.name}}</p>
                  </div>
                  <div class="form-outline flex-fill mb-4">
                     <input 
                         type="email" 
                         id="email" 
                         class="form-control" 
                         v-model.trim="email" 
                         placeholder="email" />
                     <p class="error" v-if="errors.email">{{errors.email}}</p>
                  </div>
                  <div class="form-outline flex-fill mb-4">
                     <input 
                         type="password" 
                         id="password" 
                         class="form-control" 
                         v-model="password"
                         placeholder="Password"/>
                     <p class="error" v-if="errors.password">{{errors.password}}</p>
                  </div>
                  <!--<div class="form-outline flex-fill mb-4">
                     <input 
                        type="password" 
                        id="repeatedPassword" 
                        class="form-control" 
                        v-model="repeatedPassword"
                         placeholder="Repeat your assword" />
                     <p class="error" v-if="errors.repeatedPassword">{{errors.repeatedPassword}}</p>
                  </div> -->
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>
               </form>
            </div>
            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
               <img src="../assets/icon-above-font.png"
                  class="img-fluid" alt="Groupmania logo">
            </div>
            </div>
         </div>
      </div>
      </div>
   </div>
</div>
</section>

</template>

<style>
 section {
   background-color: #eee;
 }

.btn {
   font-weight: 700;
   font-size: 18px;
   background-color: orange;
   color: black;
   border-radius: 10px;
}

.btn:hover {
   color: white;
}
.card {
   border-radius: 25px;
}

h3 {
   font-size: 20px;
   font-weight: 700;
   color: darkred;
}

 .form-controll {
   margin-bottom: 20px;
   width: 100%;
   height: 50px;
   border: 1px solid grey;
   border-radius: 10px;
 }

 input[type="text"], input[type="password"] {
   padding-left: 20px;
 }

 .img-fluid {
    height: 300px
    ;
 }

.errors {
   color: red;
}

</style>
   
<script>

import Validations from '../services/Validations.js';
import { SIGNUP_ACTION } from '@/store/storeConstant.js';
import { mapActions } from 'vuex';


export default {
   data() {
      return {
         errors: [],
         name: '',
         email: '',
         password: '',

      }
   },
   methods: {

      ...mapActions('auth', {
         signup: SIGNUP_ACTION
      }),

      async onSignup() {
         if (!this.name) {
            this.errors['name'] = "You must write your name"
         }

         if (!this.email) {
            this.errors['email'] = 'Email Required';
         } else if (!Validations.checkEmail(this.email)) {
            this.errors['email'] = 'Invalid Email';
         }

         if (!this.password) {
            this.errors['password'] = 'Password Required';
         } else if (!Validations.minLength(this.password, 6)) {
            this.errors['password'] = "Your password must be more than 6 characters";
         }

         /*  if (!this.repeatedPassword) {
            this.errors['repeatedPassword'] = "Repeat your password"
            } else if (this.password !== this.repeatedPassword) {
                this.errors['repeatedPassword'] = "Repeat your password correctly"
         }*/


         if ('name' in this.errors ||
            'email' in this.errors ||
            'password' in this.errors) {
            return false
         }

         this.signup({
            name: this.name,
            email: this.email,
            password: this.password
         })
      }
   }
};
   
</script>