<template>
  <NavHeader :user="user"/>
  <div>
      <router-view :user="user"></router-view>
  </div>
        
</template>

<script>
import NavHeader from './components/NavHeader.vue';
import axios from 'axios'

export default {
  name: 'App',
  components: { NavHeader },
  data() {
        return {
            user: ''
            }
    },

    async created() {
        //if user not authorized
        if (localStorage.getItem('token') === null &&  localStorage.getItem('userId') === null) {
            this.$router.push('/login')
        }
        //if user is authorized

        const id = localStorage.getItem('userId')
        const response = await axios.get(`http://localhost:4000/api/auth/${id}`, {
            headers: {
                token:  localStorage.getItem('token')
            }
        })
        this.user = response.data.name
        
        console.log(this.user);
    }
    
}
</script>


