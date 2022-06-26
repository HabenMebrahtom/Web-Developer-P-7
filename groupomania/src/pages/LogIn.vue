<template>
 <section class="vh-100 ">
  <div class="container-fluid py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your email and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmail" class="form-control form-control-lg" placeholder="Email" required/>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePassword" class="form-control form-control-lg"  placeholder="Password" required/>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
            </div>

            <div>
              <p class="mb-0">Don't have an account? <router-link to="/" class="text-warning text-decoration-none">Sign up</router-link>
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
   background-color: rgba(0, 0, 0, 0.6);
}

</style>

<script>
export default {};
</script>