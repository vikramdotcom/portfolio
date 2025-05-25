import Form from '@/components/contactMe'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-4'>
      <div className='py-10'>
        <h1 className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#8AF9FF] to-[#FF74FD] bg-clip-text text-transparent'>Contact Me</h1>
        <p className='text-center mb-4'>Feel free to reach out to me through the form below.</p>
    
      <Form/>
      </div>
      </div>
  )
}

export default Contact 