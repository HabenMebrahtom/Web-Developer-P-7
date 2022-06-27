<template>
  <div id="nav" class="d-flex justify-content-evenly align-items-center">
    <div >
        <router-link to="/signup" class="navbar">
          <img src="./assets/icon-left-font-monochrome-black.png" alt="Groupomania logo">
        </router-link>
    </div>
    <div>
      <ul>
          <router-link to="/signup" class="link">Sign up</router-link>
          <router-link to="/login" class="link" >Login</router-link>
    </ul>
    </div>
  </div>
  <div>
      <router-view></router-view>
  </div>
        
</template>

<script>

export default {
  name: 'App',
  components: {}
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
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }

  .link:nth-child(n-2):hover {
    color: red;
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

