import React, {useState, useEffect} from 'react';
import { useLocation, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdPerson } from 'react-icons/md';
import axios from 'axios';
import './SinglePost.css'
import CommentForm from './Comment'
import RemovePost from './RemovePost';
import UpdatePost from './UpdatePost';

function SinglePost() {
    const [post, setPost] = useState([]);
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');

    useEffect(() => {
        const fetchPost = async () => {
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
    }, [id]);

    const handleLink = async () => { 
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
         handleLink();
    })


    return (
        <section>
             <div className='btn btn-primary my-3 mx-4'>
                <Link to="/home" className='float-left text-white  link'>
                     <AiOutlineArrowLeft />
                </Link>
            </div>
            <div className="card shadow p-3 mx-auto bg-body rounded ">
                <div className='d-flex justify-content-start align-items-center text-primary'>
                    <MdPerson className='fs-3'/> <p className='fs-6 fw-bold px-2 pt-3'>{ post.username}</p>
                </div>
                <div className="media-body">
                    <h5 className="p-1 fw-bold">{ post.title }</h5>
                    <p className='px-2'>{ post.content}</p>
                </div>
                < div className="mt-2" style={{display: post.imageUrl ? 'block' : 'none'}}>
                     <img src={post.imageUrl} className="w-100 h-75" alt="post"/>
                </div>
                <div className='d-flex justify-content-end align-items-center mt-3'>
                    <RemovePost />
                    <UpdatePost />
                  </div>
            </div>
            <CommentForm/>
            
            {
                
                post.length <=  0 ? "" :
                    post.comment.map((cmt) => {
                        return <div className='comment mx-auto px-3 my-3 bg-light rounded' key={cmt.id}>
                            <br></br>
                             <div className='d-flex justify-content-start align-items-center text-primary'>
                               <MdPerson className='fs-3'/> <p className='fs-6 fw-bold px-2 pt-3'>{ cmt.username }</p>
                            </div>
                            <p className="mt-3 mb-4 pb-2">{cmt.comment}</p>
                        </div>
                    })
                }
       </section>
  )
}

export default SinglePost