import React from 'react'
import { HashRouter , Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import './App.css'


export default function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="*" element={<div>ERROR 404</div> } />
                    <Route path="/" element={ <LoginPage/> }/>
                    <Route path="/register" element={ <RegisterPage/> } />
                </Routes>
            </div>
        </HashRouter>
    )
}
