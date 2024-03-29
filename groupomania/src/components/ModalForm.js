import React, { useState } from 'react';
import axios from 'axios';
import './style/ModalForm.css'

function ModalForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');


    const hiddenFileInput = React.useRef(null);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        const url = 'http://localhost:4000/api/posts/';
        const user = JSON.parse(localStorage.getItem('user'));

        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);
        formData.append('imageUrl', image);
        formData.append('userId', user.id);
        formData.append('username', user.name);
       

        const response = await axios.post(url, formData, {
              headers: {
                'Authorization': `Bearer ${user.token}`
            } 
        })

        console.log(response.data)
        window.location.reload()
    }
    
    return (
        <section className='float-start mr-3'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
            Add Discussion
            </button>

            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="ModalLabel"> New Post</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div>
                              
                        <input
                            type="text"
                            name='title'
                            id='title'
                            className='form-control'
                            placeholder='Title'
                            onChange={event => setTitle(event.target.value)}
                            value={title}
                            aria-label="title"    />  
                           
                    </div>
                            <div>
                              
                        <textarea
                            className="form-control mt-3"
                            placeholder="Write your taughts here"
                            id="textarea"
                            onChange={event => setContent(event.target.value)}
                            value={content}
                            aria-label="content" 
                            ></textarea>
                        
                    </div>
                    <div>
                              
                    </div>      
                    <div>
                       <img width={100} height={100} src={image === '' ? 'https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6' : URL.createObjectURL(image)} className="mt-2" alt=""/>        
                    </div>       
                </div>
                <div className="modal-footer"> 
                      <input
                        type="file"
                        ref={hiddenFileInput}
                        className='upload-file'
                        onChange={event => setImage(event.target.files[0])}
                        aria-label="file" 
                            />  
                    <button type="button" className="btn btn-warning" onClick={handleClick}>Upload a file</button>   
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Post</button>
                </div>
                </div>
            </div>
        </div>
</section>
  )
}

export default ModalForm