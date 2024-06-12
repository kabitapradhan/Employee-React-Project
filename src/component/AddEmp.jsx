import React, { useState } from 'react'
import SaveEmployee from '../services/EmployeServices';

function AddEmp() {
    const [data , setData] = useState({name : "" , email : "" , password : ""})
    const [errors , setErrors ] = useState({errorc : false , errordata : {}});
    function handleChange(event){
        event.preventDefault();
        //console.log(event.target.value)
        setData({...data ,[event.target.name] : event.target.value})
        // console.log(data)
    }
    function saveData(event){
        event.preventDefault();
        SaveEmployee(data)
        .then((response) => {
            console.log(response)
            
            
        })
        .catch((error) => { 
            console.log(error);
            console.log(error.code);
            console.log("kkkkkkkkkkkkkk11111111111111")
            if(error.response.status == 400){
                console.log("kkkkkkkkkkkkkk2222222222222222")
                setErrors({errorc : true , errordata : error.data});
                console.log(errors)
            }
        })
    }
    return (
        <div className='flex max-w-2xl shadow mx-auto border-b'>
            <div className="px-8 py-8">
                <div className="text-2xl tracking-wider">
                    <h1>Add Employee Here!!!!!!!</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className='block  text-gray-700 text-sm font-normal' >Full name</label>
                    <input type="text" name="name" 
                        onChange={(e)=> handleChange(e )}
                        value={data.name} 
                        className='h-10 w-96 border rounded px-2 py-2 mt-2' 
                    />
                    {
                        
                        errors.errorc == true ? <span>nnnnnnnnnn{errors.errorc}</span> : ""
                    }
                    
                </div>
               
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className='block  text-gray-700 text-sm font-normal' >Email</label>
                    <input type="text" name="email" 
                        onChange={(e)=> handleChange(e)}
                        value={data.email} 
                        className='h-10 w-96 border rounded px-2 py-2 mt-2' 
                    />
                    {
                        errors.error == true ? <span>{errors.errordata.email}</span> : ""
                    }
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className='block  text-gray-700 text-sm font-normal' >Password</label>
                    <input type="password" name="password" 
                        onChange={(e)=> handleChange(e)}
                        value={data.password} 
                        className='h-10 w-96 border rounded px-2 py-2 mt-2' 
                    />
                    {
                        errors.error == true ? <span>{errors.errordata.password}</span> : ""
                    }
                </div>
               
                <div className="">
                    <button 
                        onClick={(e)=> saveData(e)}
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
