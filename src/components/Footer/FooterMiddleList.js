import React from 'react'

const FooterMiddleList = ({title, listItem}) => {
  return (
    <div className='w-full mb-5'>
            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{title}</h3>
          <ul className='flex flex-col font-bodyFont'>
            {
                listItem.map((list)=> list.listData.map((data, i)=>(
                    <li className='footerLink mb-2' key={i}>{data}</li>
                )))
            }
          </ul>
    </div>
  )
}

export default FooterMiddleList