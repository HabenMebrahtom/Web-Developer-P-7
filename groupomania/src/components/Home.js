import React from 'react'
import ModalForm from './ModalForm';
import DisplayPosts from './DisplayPosts';
import './style/Home.css'

function Home() {
  return (
    <section>
          <h1 className='text-center my-5'>Discussion Forum</h1>
          <div className='sub-header mb-5'>
            <ModalForm /> 
          </div>
      <div className='my-5'>
        
            <DisplayPosts />
          </div>  
      </section>

  )
}

export default Home