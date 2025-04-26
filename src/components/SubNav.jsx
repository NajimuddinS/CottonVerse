import React from 'react'

const SubNav = () => {
    const items = ["T-Shirts","Shirts","Sarees","Hoodies","Perfumes","Footwear","Collections","T-Shirts","Shirts","Sarees","Hoodies","Perfumes","Footwear","Collections"]
    
    return (
        <div className='w-full overflow-x-auto hide-scrollbar bg-red-600 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
            <div className='flex gap-4 md:gap-6 lg:gap-10 container m-auto p-2'>
                {items.map((item, index) => (
                    <span 
                        key={index}
                        className='text-white font-thin cursor-pointer whitespace-nowrap text-sm md:text-base hover:text-black'
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SubNav