import React from 'react'

function AddEmp() {
    return (
        <div className='flex max-w-2xl shadow mx-auto border-b'>
            <div className="px-8 py-8">
                <div className="text-2xl tracking-wider">
                    <h1>Add Employee Here!!!!!!!</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className='block  text-gray-700 text-sm font-normal' >Full name</label>
                    <input type="text" name="" id="" className='h-10 w-96 border rounded px-2 py-2 mt-2' />
                </div>
               
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className='block  text-gray-700 text-sm font-normal' >Email</label>
                    <input type="text" name="" id="" className='h-10 w-96 border rounded px-2 py-2 mt-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className='block  text-gray-700 text-sm font-normal' >Password</label>
                    <input type="password" name="" id="" className='h-10 w-96 border rounded px-2 py-2 mt-2' />
                </div>
               
                <div className="">
                    <button 
                        className='bg-green-600 text-white mt-3 text-center py-2 px-3 rounded hover:bg-green-800'>
                            Save
                    </button>    
                    <button 
                        className='bg-red-400 text-white mt-3 text-center py-2 px-3 ml-2 rounded hover:bg-red-800'>
                            cancel
                    </button>                 
                </div>
            </div>

        </div>
    )
}

export default AddEmp
