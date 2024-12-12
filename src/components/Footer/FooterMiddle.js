import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../constants'
import { logo, NgFlag } from "../../assets"

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full border-b-[1px] border-gray-500 p-8'>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 md:place-items-center md:items-start '>
            {middleList.map((items)=> (
              <FooterMiddleList 
              key={items.id}
              title={items.title}
              listItem={items.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* =========== Top Start Here ============= */}
      {/* =========== Top End Here =============== */}
      {/* =========== Bottom Start Here ========== */}
      <div className='w-full flex items-center justify-center py-6'>
        <div className='mr-6'>
          <img className='w-20 pt-3' src={logo} alt='logo'/>
        </div>
        <div className='flex mr-6'>
          <p className='flex items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 py-1 px-2'>English</p>
        </div>
        <div className='flex items-center justify-center border-gray-500 border-[1px] hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
          <img className='w-6' src={NgFlag}  alt='FlagImg'/>
          <p>Nigeria</p>
        </div>
      </div>
      {/* =========== Bottom End Here ============ */}
    </div>
  )
}

export default FooterMiddle