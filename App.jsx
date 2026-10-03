import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ContactsPage from './pages/ContactsPage'
import PricingPage from './pages/PricingPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path='contacts' element={<ContactsPage/>} />
      </Route>
    </Routes>
  )
}

export default App
