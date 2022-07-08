<template>
  <NavHeader/>
  <div>
      <router-view></router-view>
  </div>
        
</template>

<script>
import NavHeader from './components/NavHeader.vue'

export default {
  name: 'App',
  components: { NavHeader }
}
</script>


