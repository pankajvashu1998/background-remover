import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
   

   
  
    const handleImageUpload = (e)=>{
       let file = e.target.files[0];
       if(file){
        navigate("/result", {state:file})
       }
    }

    

    
    
  return (
    <div>
        <div className='grid lg:grid-cols-2 gap-4 p-4 w-full'>
            <div className=' p-4'>
                <div className='flex items-center justify-center flex-col'>
                    <video width="420" height="340" autoPlay muted>
                        <source src='manuel_compressed.mp4' type='video/mp4'/>
                    </video>
                    <div>
                        <h1 className=' text-3xl lg:text-6xl text-center font-bold text-gray-700'>Remove Image Background</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='font-bold text-gray-700 py-3'>100% Automatically and</p>
                        <p className='bg-yellow-400 px-2 font-semibold'>Free</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className=' p-4 flex items-center justify-center flex-col'>
                    <div className='max-w-[350px]  h-[350px] p-10 shadow-xl shadow-gray-300 rounded-4xl flex items-center justify-center flex-col'>
                        <input type="file" id='file' className='border w-full rounded-2xl py-3 px-3 bg-blue-400 text-white font-semibold hidden' onChange={handleImageUpload}/>
                       
                        <div className='flex items-center gap-3 my-5 flex-col'>
                            <img src="safari-pinned-tab.svg" alt="" className='w-[100px] '/>
                            <p className='font-bold text-gray-700 '>100% Automatically and</p>
                            <p className='bg-yellow-400 px-2 font-semibold'>Free</p>
                        </div>
                        <label htmlFor="file" className='border py-3 px-10 text-xl font-bold text-white bg-blue-400 cursor-pointer hover:bg-blue-500 duration-300 rounded-full'>Upload Image</label>  
                    </div>

                    {/* <div>
                        <h1 className='pt-5 text-xl font-bold text-gray-700'>No image? Try one of these:</h1>
                        <div className='flex items-center gap-2 '>
                            <input type="text" placeholder='Search images....' className='border w-full py-3 px-5 my-2 rounded' onChange={(e)=>setSearchValue(e.target.value)}/>
                          
                        </div>
                    </div>
                    <div className='grid grid-cols-2  lg:grid-cols-4 gap-3  p-6'>
                       
                        {
                            photodata.map((value, index)=>(
                                <div key={index} className='w-[100px] '>
                                    <img src={value.src.medium} alt="" className='m-2 rounded hover:scale-[1.05] duration-300 hover:shadow-xl shadow-blue-600 bg-cover' onClick={()=>getImageURL(value.src.medium)}/>
                                </div>
                            ))
                        }
                    </div>
                    */}
            </div>
        </div>

        
 
    </div>
  )
}

export default Home
