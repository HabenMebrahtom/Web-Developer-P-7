import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplayPosts() {

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        const response = await axios.get('http://localhost:4000/api/posts/', {
            headers: {
                'Authorization': `Bearer ${token}`
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
                    <div className="card my-4 mx-5 " key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
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