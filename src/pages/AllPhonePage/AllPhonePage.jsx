import React from 'react'
import PhoneCard from '../../components/Card/PhoneCard'
import db from '../../data/db.json'

const AllPhonePage = () => {
const smartPhoneListItems = db.smartphones;

  return (
    <>
        <div className='p-4 pt-2 grid grid-cols-4 gap-8'>
            {smartPhoneListItems?.map((item,index)=>{
              return <PhoneCard key={index} {...item}/>
            })}
        </div>
    </>
  )
}

export default AllPhonePage