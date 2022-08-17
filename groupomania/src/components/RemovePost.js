import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import axios from 'axios';

function RemovePost() {
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');

    const deletePost = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.delete(`http://localhost:4000/api/posts/${id}`, {
            headers: {
                    'Authorization': `Bearer ${user.token}`
                }
        });

        if (response.status === 200) {
             navigate('/home');
            window.location.reload();
             console.log('This post deleted sucessfully');
        }
       
        
    }
  return (
    <div>
      <div className='text-danger mx-3' id="delete-post" onClick={deletePost}>
        < BsFillTrashFill/>
      </div>
    </div>
  )
}

export default RemovePost