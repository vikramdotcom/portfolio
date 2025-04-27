import Form from '@/components/contactMe'
import React from 'react'

const Contact = () => {
  return (
    <div className=''>
      <div>
        <h1 className='text-4xl font-bold text-center mb-8'>Contact Me</h1>
        <p className='text-center mb-4'>Feel free to reach out to me through the form below.</p>
        <p className='text-center mb-4'>I will get back to you as soon as possible.</p>
        <p className='text-center mb-4'>You can also find me on social media.</p>
      <Form/>
      </div>
      </div>
  )
}

export default Contact