<template>
 <section>
      <div class="" v-for="post in posts" :key="post.id">
         <div class="card">
            <div class="card-header">
               <h4>{{post.title}}</h4>
            </div>
            <div class="card-body">
                <p>{{post.content}}</p>
            </div>
        </div>
      </div>
   </section>
</template>

<script>

import axios from 'axios';
export default {
    data() {
            return {
              posts: []
           }
      },
   methods: {
         async getData() {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/api/posts/', {
                   headers: {
                       'Authorization': `Bearer ${token}`
               }
               });
           this.posts = response.data;
           console.log(response.data);
         },
         created() {
               this.getData();
      }
}
 }
     
</script>