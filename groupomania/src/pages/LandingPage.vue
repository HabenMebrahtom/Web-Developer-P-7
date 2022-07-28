<template>
   <div class="sub-header row d-flex  justify-content-between align-items-center px-5">
      <div class="col ">
          <SearchBar />
      </div>
      <div class="col float-right">
          <ModalForm />
      </div>
   </div>  
   <DisplayPosts/> 
</template>

<script>

import ModalForm from "../components/ModalForm.vue";
import SearchBar from "../components/SearchBar.vue";
import DisplayPosts from "@/components/DisplayPosts.vue";

export default {
   name: 'LandingPage',
   components: {
         ModalForm,
         SearchBar,
         DisplayPosts
      }, 
    
}
</script>

<style>

.sub-header {
      height: 100px;
}
</style>