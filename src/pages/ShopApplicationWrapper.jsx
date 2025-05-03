import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'

function ShopApplicationWrapper() {
  return (
    <div>
        <NavigationBar/>
        <Outlet/>
    </div>
  )
}

export default ShopApplicationWrapper