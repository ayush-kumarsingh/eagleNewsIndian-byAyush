import React from 'react'


export default function Navbar(props) {
    return (

        <div className='flex justify-center text-2xl '>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('general')}}>General</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('business')}}>Business</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('health')}}>Health</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('entertainment')}}>Entertainment</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('science')}}>Science</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('sports')}}>Sports</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
            <div className="m-4 group hover:scale-110 hover:cursor-pointer">
                <a onClick={(e)=>{e.preventDefault();props.fetchdatawithcategory('technology')}}>Techonology</a>
                <hr className='bg-black h-1 w-0 transition-all ease-in-out duration-150 delay-75 group-hover:w-auto'/>
            </div>
        </div>


    )
}
