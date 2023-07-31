import React from 'react'

export default function Cards(props) {
  return (
    <div className='flex flex-col items-center h-1/3 w-1/4 shadow-lg shadow-red-300 rounded-xl m-4 box-border hover:scale-105 hover:shadow-red-500  transition-all ease-in-out duration-150 group'>
        <div className="bg-red-400 w-full text-center p-2 rounded-t-xl group-hover:bg-red-500">{props.title}</div>
        <div className="h-44 bg-blue-500">
            <img src={(props.image)?props.image:require(`../images/${props.category}.jpg`)} className="h-44"/>
        </div>
        <div className="p-2"><p> {(props.description)?props.description:'click read more to read the full description'}</p></div>
        <a href={props.more} target='_blank' className='bg-red-400 mt-2 mb-2 p-2 rounded-xl text-white transition-all ease-in-out duration-150 group-hover:bg-red-500 hover:!scale-110'>Read more</a>
      
    </div>
  )
}
