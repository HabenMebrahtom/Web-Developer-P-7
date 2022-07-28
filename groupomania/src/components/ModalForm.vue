<template>
   <section>
      <!-- Button trigger modal -->
      <button type="button" class="btn modal-btn" data-bs-toggle="modal" data-bs-target="#postModal">
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
                    <div class="mb-3">
                        <label for="post-title" class="form-label">Title</label>
                        <input v-model="title" type="text" class="form-control" id="post-title" >
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                        <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
            </div>
            <div class="modal-footer">
                 <label for="uploadImage"> <i class="fa-solid fa-image fa-3x"></i></label>
               <input 
                  name="imageUrl"
                  type="file" 
                  @change.prevent="handleFileUpload($event)"
                  class="form-control rounded upload" 
                  id="uploadImage"
                  ref="file">
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
            title: null,
            content: null,
            imageUrl: null, 
            userId: null
           }
    },
    methods: {

        handleFileUpload(event) {
            const file = event.target.files[0];
            this.imageUrl = file;
        },
        async onSubmit() {
            /*if (!this.title) {
                this.errors['title'] = 'You must write the title'
            }

            if (!this.content) {
                this.errors['content'] = 'You must write a content';
            }

            if ('title' in this.errors || 'content' in this.errors) {
                return false
            } */
            const id = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            
            const formData = new FormData();
            formData.append("imageUrl", this.imageUrl);
            formData.append("title", this.title);
            formData.append("content", this.content);
            formData.append("userId", id);
            const responseData = await axios.post('http://localhost:4000/api/posts', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(responseData.data)

        }
       }
    }
</script>

<style>

  .modal-btn {
    float: right;
    width: 150px;
    height: 40px;
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


</style>