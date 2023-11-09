import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom/dist'
import { Home } from './pages/home'
import { Shop } from "./pages/shop"
import { Product } from "./pages/product"
import { Page } from "./pages/page"
import { Profile } from "./pages/profile"
import { Selected } from "./pages/selected"
import { Korzika } from "./pages/korzinka"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/page" element={<Page/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/selected" element={<Selected/>} />
      <Route path="/korzinka" element={<Korzika/>} />

    </Routes>

    </>
  )
}

export default App
