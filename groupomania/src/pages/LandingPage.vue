<template>
    <section class="vh-100">
         <div class="container py-5 ">
            <div class="row d-flex justify-content-evenly align-items-center">
                <div id="description" class="col-md-10 col-lg-6 col-xl-5">
                    <h2 class="text-uppercase fw-bolder">
                        successfull team work
                    </h2>
                    <p class="text-capitalize fs-3 fw-bold ">
                        discussion for bright ideas
                    </p>
                    <div class="mt-5">
                        <p class="fst-italic text-dark ">If you don't have an account register here ...</p>
                        <router-link to="/signup" class="btn-link text-uppercase ">Sign Up</router-link>
                    </div>
                </div>
                <div  id="image" class="col-md-10 col-lg-6 col-xl-5 mt-5">
                    <img class="img-fluid" src="../assets/discussion.jpg" alt="work discussion">
                </div>
            </div>     
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style>
#description h2 {
    color: rgb(121, 5, 80);
}

.btn-link {
    text-decoration: none;
    text-transform: uppercase;
    font-style: none;
    color: white;
    background-color: orange;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 600;
}

.btn-link:hover {
    color: black;
}

</style>