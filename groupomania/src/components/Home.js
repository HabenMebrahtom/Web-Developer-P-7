import React from 'react'
import ModalForm from './ModalForm';
import DisplayPosts from './DisplayPosts';
import './style/Home.css'

function Home() {
  return (
      <section>
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