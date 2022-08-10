import React, { useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';


function Comment() {

    const [comment, setComment] = useState('');
     const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');

    const postComment = async (event) => {
        event.preventDefault();
        const url = `http://localhost:4000/api/comments/${id}`;
        const user = JSON.parse(localStorage.getItem('user')); 

        const formData = new FormData();

        formData.append('comment', comment);

        const response = await axios.post(url, formData, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        console.log(response.data)
    }
  return (
    <div>
          <div className="card form-outline mt-2 mx-3">
              <textarea
                  className="form-control"
                  id="comment"
                  onChange={event => setComment(event.target.value)}
                  value={comment}
                  placeholder="Write your comment"
                  ></textarea>
            </div>
            <div className="float-end mt-2 pt-1 mr-3">
              <button type="button" className="btn btn-primary btn-sm" onClick={postComment}>Post comment</button>
            </div>
    </div>
  )
}

export default Comment