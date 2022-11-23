import React from 'react'
import mail from './image.png' ;

const First = () => {
  return (
    <div className='space-y-12'>
        <div className='top w-10/12 m-auto p-5 space-y-4 pt-10'>
            <i className="fa-solid fa-basketball text-3xl text-pink-600"></i>
            <section className='font-bold leading-6'>
                <h4 className='text-xl'>I have 2 invites, do you</h4>
                <h4 className='text-xl'>want to be a <span className='text-pink-600'>player?</span></h4>
            </section>
        </div>
        <img src={mail} alt='mail' className='h-[230px] m-auto'/>
        <div className='bg-pink-700 flex p-5 px-8 justify-between items-center absolute bottom-0 w-full'>
            <p className='text-white font-semibold'>Start Playing</p>
            <i className="fa-solid fa-arrow-right text-white"></i>
        </div>
    </div>
  )
}

export default First
