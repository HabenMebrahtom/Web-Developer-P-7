<template>
   <section>
      <!-- Button trigger modal -->
      <button type="button" class="btn modal-btn me-4 mt-5" data-bs-toggle="modal" data-bs-target="#postModal">
        New Post
      </button>

      <!-- Modal -->
      <div class="modal fade" id="postModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Post New Feature</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <div class="input-group mb-3">
                 <input 
                   v-model="title"
                   type="text" 
                   class="form-control" 
                   id="post-title" 
                   aria-describedby="basic-addon3"
                    placeholder="Title">
               </div>
               <div>
                  <textarea
                   v-model="content" 
                   name="post" 
                   id="post" 
                   cols="30" 
                   rows="10" 
                   placeholder="Write your thoughts here ..."></textarea>
               </div>
            </div>
            <div class="modal-footer">
                <label for="uploadImage"> <i class="fa-solid fa-image fa-3x"></i></label>
               <input type="file" class="form-control rounded upload" id="uploadImage">
               <button type="button" class="btn post-btn" @click.prevent="onSubmit()">Save</button>
               <button type="button" class="btn bg-danger" data-bs-dismiss="modal">Close</button>
            </div>
         </div>
        </div>
      </div>
   </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ModalForm',
    data () {
        return {
            errors: [],
            title: '',
            content: '',
            image: '',
           }
    },
    methods: {
        async onSubmit() {
            if (!this.title) {
                this.errors['title'] = 'You must write the title'
            }

            if (!this.content) {
                this.errors['content'] = 'You must write a content';
            }

            if ('title' in this.errors || 'content' in this.errors) {
                return false
            } 
            
            const newPost = {
                title: this.title,
                content: this.content
            }

            const responseData = await axios.post('http://localhost:4000/api/topic', newPost);
            console.log(responseData.data)

        }
       }
    }
</script>

<style>

  .modal-btn {
   float: right;
   width: 150px;
   height: 50px;
   background-color:rgb(5, 126, 126);
   color: white;
  }
   textarea {
      width: 100%;
      height: 150px;  
       }
   .upload {
      display: none;
      visibility: none;
   }

   i .fa-image {
      height: 100px;
      width: 100px;
   }

   #post-title {
      width: 90%;
   }

</style>