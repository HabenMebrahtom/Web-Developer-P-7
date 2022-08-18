import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdTopic, MdGppGood } from 'react-icons/md';
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
  

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {posts.map(post => {
                return (
                    <div className="media shadow-lg p-3 bg-body rounded my-3 mx-auto d-flex position-relative" key={post.id} >
                        <div className='me-3 text-primary fs-3'>
                             <MdTopic/>
                        </div>
                        <div className="media-body">
                            <Link to={`/post?id=${post.id}`} className="link h6" style={{color: post.isRead ? 'blue' : 'green'}}>
                                {post.title}
                            </Link>
                            <p>{post.content}</p>
                        </div>
                        <div className='ms-auto mark'>
                            {post.isRead ? '': < MdGppGood />}
                        </div>
                    </div>
                )
             })
            }
         </>
  )
}

export default DisplayPosts