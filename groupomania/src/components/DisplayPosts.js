import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
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
                    <div  className="card my-4 mx-5 w-75" key={post.id}>
                        <div className="card-body">
                            <Link to={`/post?id=${post.id}`} className="link">
                                <h5 className="card-title">{post.title}</h5>
                            </Link>
                            <p className="card-text">{post.content}</p>
                        </div>
                    </div>
                )
             })
            }
         </>
  )
}

export default DisplayPosts