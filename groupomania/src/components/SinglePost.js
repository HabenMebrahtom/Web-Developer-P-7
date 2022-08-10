import React, {useState, useEffect} from 'react';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';
import './DisplayPosts.css';
import Comment from './Comment'

function SinglePost() {
    const [post, setPost] = useState('');
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');

    useEffect(() => {
        const fetchPost= async() => {
            const user = JSON.parse(localStorage.getItem('user'))
            const response = await axios.get(`http://localhost:4000/api/posts/${id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            setPost(response.data)
            console.log(response.data)
        }

        fetchPost();
    }, [id])


    return (
        <section>
             <div className='btn btn-primary my-3 mx-4'>
                <Link to="/home" className='float-left text-white link'>
                    Return to posts
                </Link>
            </div>
            <div className="row no-gutters bg-light position-relative mt-5 mx-3">
                < div className="col-md-6 mb-md-0 p-md-4">
                <img src={post.imageUrl} className="w-75 h-75" alt="post"/>
                </div>
                <div className="col-md-6 position-static p-4 pl-md-0">
                    <h5 className="mt-0">{ post.title }</h5>
                    <p>{ post.content}</p>
                </div>
            </div>

            <Comment />
       </section>
  )
}

export default SinglePost