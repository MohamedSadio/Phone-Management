import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import AllPhonePage from './pages/AllPhonePage/AllPhonePage';
import ShopApplicationWrapper from './pages/ShopApplicationWrapper';
import PhoneDetailPage from './pages/PhoneDetails/PhoneDetailPage';
import { loadPhoneById } from './routes/phone';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper/>,
        children:[
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/allPhones",
                element: <AllPhonePage/>,
            },
            {
                path: "/phoneDetails/:phoneId",
                loader : loadPhoneById,
                element: <PhoneDetailPage/>,
            }
        ]
    }
]);
