import React from 'react'
import PhoneCard from '../../components/Card/PhoneCard'
import db from '../../data/db.json'

const AllPhonePage = () => {
const smartPhoneListItems = db.smartphones;

const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
const isAdmin = utilisateurConnecte?.role === 'admin';

  return (
    <>
        <div className='flex flex-row'>
          {isAdmin && (
            <div className='flex items-center p-4 border-b'>
            Ajout de telephone
          </div>
          )}
          <div className='p-4 pt-5 grid grid-cols-4 gap-8 '>
              {smartPhoneListItems?.map((item,index)=>{
                return <PhoneCard key={index} {...item}/>
              })}
          </div>
        </div>
        
        
    </>
  )
}

export default AllPhonePage