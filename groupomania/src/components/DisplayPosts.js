import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdTopic, MdGppGood, MdPerson } from 'react-icons/md';
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
        console.log(response.data)
    }
  

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {posts.map(post => {
                return (
                    <div className="media shadow-lg p-3 bg-body rounded my-3 mx-auto position-relative" key={post.id} >
                      <Link to={`/post?id=${post.id}`} className="link">
                        <div className='d-flex justify-content-start align-items-center text-primary'>
                            <MdPerson className='fs-3'/> <p className='fs-6 fw-bold px-2 pt-3'>{ post.username}</p>
                         </div>
                        <div className='d-flex'>
                            <div className='me-3 text-primary fs-3'>
                             <MdTopic/>
                            </div>
                            <div className="media-body">
                                <p className="link fs-6 fw-bold" style={{color: post.isRead ? 'black' : 'green'}}>
                                    {post.title}
                                </p>
                                <p className='text-dark'>{post.content}</p>
                            </div>
                            <div className='ms-auto mark'>
                                {post.isRead ? '': < MdGppGood />}
                            </div>
                            </div>
                        </Link>
                    </div>
                )
             })
            }
         </>
  )
}

export default DisplayPosts