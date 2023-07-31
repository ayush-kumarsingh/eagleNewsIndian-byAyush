import React from 'react'

export default function Footer() {
    return (
        <div className='bg-red-600 flex-col flex items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#d1d5db" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,165.3C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <br />
            <div className="flex">
            <a href="https://github.com/ayush-kumarsingh" className='hover:scale-125 transition-all delay-75 duration-150 ease-in-out'><i className="fa-brands fa-github fa-2xl ml-7 mr-7"></i></a>
            <a href="https://www.linkedin.com/in/aksingh564/" className='hover:scale-125 transition-all delay-75 duration-150 ease-in-out'><i className="fa-brands fa-linkedin fa-2xl ml-7 mr-7"></i></a>
            <a href="https://www.instagram.com/kum8r_ay4sh/" className='hover:scale-125 transition-all delay-75 duration-150 ease-in-out'><i className="fa-brands fa-instagram fa-2xl ml-7 mr-7"></i></a>
            </div>
            <br />
            <p>
                Developer : Ayush Kumar Singh
            </p>
            <p>
                Mail at : <a href="mailto:aksingh.er564@gmail.com" className='hover:underline'>aksingh.er564@gmail.com</a>
            </p>
            <br />
            
            
        </div>
    )
}
