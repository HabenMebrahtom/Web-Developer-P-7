import React from 'react'
import ModalForm from './ModalForm';
import DisplayPosts from './DisplayPosts';
import './Home.css'

function Home() {
  return (
      <section>
          <div className='sub-header'>
            <ModalForm /> 
          </div>
          <div>
            <DisplayPosts />
          </div>  
      </section>

  )
}

export default Home