import React from 'react'
import Image from "../../assets/images/iphone14Pro.jpg"
import EyeIcon from '../common/EyeIcon'
import AddIcons from '../common/AddIcons'
import DeleteIcon from '../common/DeleteIcon'

const PhoneCard = ({id,name,brand,price,imageUrl}) => {
  return (
    <div className='flex flex-col transition-transform duration-300 w-full max-w-xs rounded-2xl shadow-md overflow-hidden bg-white'>
        <div className='relative'>
          <img 
            className='h-52 sm:h-64 md:h-72 w-full object-cover' 
            src={Image} 
            alt="iPhone 14 Pro" 
          />
          <div className='absolute top-3 right-3'>
            <span className='bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-medium'>New</span>
          </div>
        </div>

        <div className='p-4'>
          <div className='flex justify-between items-center w-full mb-2'>
            <h3 className='text-lg font-semibold text-gray-800'>iPhone 14 Pro</h3>
            <button className='p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center hover:scale-110 transform'> 
              <EyeIcon/> 
            </button>
          </div>
          
          <div className='flex justify-between items-end'>
            <div>
              <p className='text-gray-500 text-sm mb-1'>Apple Inc.</p>
              <p className='text-xl font-bold'>1299 €</p>
            </div>
            <div className='flex space-x-2'>
              <button className='hover:scale-110 transform py-2 px-3 rounded-lg text-sm font-medium transition-colors'>
                <DeleteIcon/>
              </button>
              <button className='hover:scale-110 transform p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center'> 
                <AddIcons/> 
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PhoneCard