import React, { useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import './style/SinglePost.css'


function Comment() {

    const [comment, setComment] = useState('');
     const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');
 
 
    const postComment = async (event) => {
        event.preventDefault();

        const url = `http://localhost:4000/api/comments/${id}`;
        const user = JSON.parse(localStorage.getItem('user')); 

        const commentObj = {
            comment: comment,
            username: user.name
        }
        const response = await axios.post(url, commentObj, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        console.log(response.data);
        window.location.reload()
       }
       
  return (
    <div className="form-outline my-5 mx-auto comment">
          <div>
              <textarea
                  className="form-control"
                  id="comment"
                  onChange={event => setComment(event.target.value)}
                  value={comment}
                  placeholder="Write your comment"
                  ></textarea>
            </div>
            <div className="float-end mx-2 pt-1">
                <button type="button" className="btn btn-primary btn-sm" onClick={postComment}>Save comment</button>
           </div>
    </div>
  )
}

export default Comment