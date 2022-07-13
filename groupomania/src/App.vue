<template>
  <NavHeader :user="user" />
  <div>
      <router-view :user="user"></router-view>
  </div>
        
</template>

<script>
import NavHeader from './components/NavHeader.vue';
import axios from 'axios';
import './axios'

export default {
  name: 'App',
  components: { NavHeader },
  data() {
        return {
            user: null
            }
    },

    async created() {
        //if user not authorized
        if (localStorage.getItem('token') === null &&  localStorage.getItem('userId') === null) {
            this.$router.push('/login')
        }
    },
    async mounted() {
        const id = localStorage.getItem('userId')
        const response = await axios.get(`${id}`)

        this.user = response.data
    }
    
}
</script>


