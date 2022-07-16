import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import './App.css'


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
