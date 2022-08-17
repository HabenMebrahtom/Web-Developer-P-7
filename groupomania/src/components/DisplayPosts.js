import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdTopic } from 'react-icons/md';
import axios from 'axios';
import './DisplayPosts.css';

function DisplayPosts() {

    const [posts, setPosts] = useState([]);

 
    const fetchData = async () => {
           const user = JSON.parse(localStorage.getItem('user'))
        const response = await axios.get('http://localhost:4000/api/posts/', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setPosts(response.data)

    }
  
    const handleLink = async (id) => { 
        const user = JSON.parse(localStorage.getItem('user'))
        
        const data = {
            isRead: true
        }

     await axios.put(`http://localhost:4000/api/posts/${id}`, data, {
                headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {posts.map(post => {
                return (
                    <div className="media my-2 mx-2 d-flex" key={post.id} >
                        <div className='icone'>
                             <MdTopic/>
                        </div>
                        <div className="media-body">
                            <Link to={`/post?id=${post.id}`} className="link h6" onClick={handleLink(post.id)} style={{color: post.isRead ? 'black' : 'blue'}}>
                                {post.title}
                            </Link>
                            <p>{post.content}</p>
                        </div>
                        <div className='float-right'>
                            {post.isRead ? '': <p>New Post</p>}
                        </div>
                    </div>
                )
             })
            }
         </>
  )
}

export default DisplayPosts