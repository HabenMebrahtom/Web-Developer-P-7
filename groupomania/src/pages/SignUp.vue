<template>
<section class="vh-100">
<div class="container h-100 ">
   <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
      <div class="card text-black bg-white">
         <div class="card-body p-md-4">
            <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
               <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
               <form class="mx-1 mx-md-4">
                  <div class="form-outline flex-fill mb-4">
                     <input type="text" id="form3Example1c" class="form-control" placeholder="Full name" required/>
                  </div>
                  <div class="form-outline flex-fill mb-4">
                     <input type="email" id="form3Example3c" class="form-control"  placeholder="email" required/>
                  </div>
                  <div class="form-outline flex-fill mb-4">
                     <input type="password" id="form3Example4c" class="form-control" placeholder="Password" required/>
                  </div>
                  <div class="form-outline flex-fill mb-4">
                     <input type="password" id="form3Example4cd" class="form-control"  placeholder="Repeat your assword" required/>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>
               </form>
            </div>
            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
               <img src="../assets/icon-above-font.png"
                  class="img-fluid" alt="Groupmania">
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

</style>
   
<script>
export default {};
</script>