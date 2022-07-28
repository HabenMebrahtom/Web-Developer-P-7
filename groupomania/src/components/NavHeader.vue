<template>
      <div id="nav" class="d-flex justify-content-between align-items-center px-5">
          <div >
              <router-link to="/login" class="navbar ml-5" >
                 <img src="../assets/icon-left-font-monochrome-black.png" alt="Groupomania logo">
              </router-link>
              <div class="navbar">
                 <img src="../assets/icon-left-font-monochrome-black.png" alt="Groupomania logo">
              </div>
          </div>
          <div>
              <router-link to="/login" class="link" >Log in</router-link>
              <router-link  to="/signup" class="link" >Sign up</router-link>
          </div>
          <div >
            <!--
               <router-link  to="/login" class="link" @click.prevent="handleSubmit">Log out</router-link>
            -->  
          </div>  
     </div>
</template>


<script>

export default {
    name: 'NavHeader',
  data() {
    return {
        user: null
      }
    }, 
    methods: {
      handleSubmit() {
        localStorage.clear();
        this.$router.replace('/login');
      },
      
    
  }   
           
    }
   
</script>


<style>

#nav {
  height:  100px;
  color: black;
  background-color: rgb(25, 237, 237);
}

.navbar img {
  width: 150px;
  height: 150px;
}

  .link {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
  }

  .link:hover {
    color: rgb(211, 7, 197);
    font-size: 20;
    font-weight: 700;
  }

  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }


   @media screen and (max-width: 480px) {
   .navbar img {
     width: 150px;
     height: 150px;
   }

   .link {
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
   }

   }
</style>