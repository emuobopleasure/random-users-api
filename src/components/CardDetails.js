import React, { useState } from 'react'

const CardDetails = ({item}) => {
    console.log("aaaa", item)
    const [view, setView] = useState(false)

    const handleToggle = (id) => {
        setView((prevView) => (
            item.id === id ? !prevView : prevView
        ))
    }

  return (
    <div className='card-details p-[30px] w-[25rem] flex flex-col gap-3 justify-center bg-[#0f172a] rounded-[40px] my-4 shadow-gray-800 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
        {
        <div className='card-front flex flex-col gap-3 justify-center'>
            <img src={item.avatar} 
                className="w-[200px] h-[200px] rounded-[30%] border mx-auto mb-3"
            />
            <div className='fullname font-bold text-lg'>
                {item.first_name} {item.last_name}
            </div>
            <div>{item.phone_number}</div>
            <div>{item.email}</div>
            <div>{item.employment.title}</div>
        </div>

        }
        {
            view &&
        <div className='card-back'>
            <div>{item.username}</div>
            <div>{item.gender}</div>
            <div>{item.date_of_birth}</div>
            <div><span>{item.address.city}</span></div>
            <div>{item.subscription.plan}</div>
            <div>{item.social_insurance_number}</div>
        </div>
        }
        
        <button onClick={()=>handleToggle(item.id)} className='button mx-auto font-semibold border px-3 py-2 rounded-[15px] hover:bg-white hover:text-[#0f172a]'>
            {view ? "View Less" : "View More"}
        </button>
    </div>
  )
}

export default CardDetails