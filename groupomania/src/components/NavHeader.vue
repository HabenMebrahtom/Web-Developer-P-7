<template>
      <div id="nav" class="d-flex justify-content-evenly align-items-center">
          <div >
              <router-link to="/" class="navbar">
                <img src="../assets/icon-left-font-monochrome-black.png" alt="Groupomania logo">
              </router-link>
          </div>
          <div>
              <ul v-if="!user">
                <router-link to="/login" class="link" >Log in</router-link>
              </ul>
              <ul v-if="user" >
                <router-link  to="/login" class="link" @click="handleSubmit">Log out</router-link>
              </ul>
          </div>  
     </div>
</template>


<script>
export default {
    name: 'NavHeader',
    props: ['user'], 
    methods: {
        handleSubmit() {
            localStorage.clear();
            this.$router.push('/login');
             }
    }
   }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  height:  150px;
  color: black;
}

.navbar img {
  width: 250px;
  height: 200px;
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
    color: blue;
    font-size: 20;
    font-weight: 700;
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