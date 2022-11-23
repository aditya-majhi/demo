import React from 'react'

const Second = () => {
  return (
    <div className='bg-pink-600 flex justify-center flex-col h-full w-full absolute space-y-3'>
        <div className='p-5 h-2/5 w-5/6 m-auto pt-10 space-y-12'>
            <i className="fa-solid fa-basketball text-3xl text-white"></i>
            <section className='text-lg font-semibold text-white'>
                <h4>Send your best work to</h4>
                <h4>a.kemalakcay@gmail.com</h4>
            </section>
        </div>
        <div className='bg-white h-3/5 p-7 rounded-t-3xl'>
            <hr className='w-1/4 m-auto mb-4 p-0.5 -mt-2 bg-slate-300 border rounded-full'></hr>
            <div className='text mb-5 font-bold'>
                <h4>In order to get drafted,</h4>
                <h4>your e-mail should contain:</h4>
            </div>
            <div className='mb-5 space-y-2'>
                <div className='flex space-x-7 items-center p-4 rounded-md border border-gray-200 shadow-md'>
                    <i className="fa-solid fa-image text-pink-600"></i>
                    <h4 className='font-semibold'>3 to 5 shots</h4>
                </div>
                <div className='flex space-x-7 items-center p-4 rounded-md border border-gray-200 shadow-md'>
                    <i className="fa-solid fa-box-archive text-pink-600"></i>
                    <h4 className='font-semibold'>No zip or rar files</h4>
                </div>
                <div className='flex space-x-7 items-center p-4 rounded-md border border-gray-200 shadow-md'>
                    <i className="fa-solid fa-basketball text-pink-600"></i>
                    <h4 className='font-semibold'>Your Dribble profile</h4>
                </div>
            </div>
            <p className='text-xs text-center pt-4 font-semibold'>I will be announcing the winners in 7 days.</p>
        </div>
    </div>
  )
}

export default Second
