import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
function MainLayout() {
    const linkClass = ({ isActive }) => {
        return `px-3 py-2 font-medium ${isActive ? 'text-primary  scale-110 md:scale-120' : 'text-primary-light hover:scale-105'}`
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='min-h-screen flex flex-col'>
            <header className='flex flex-row-reverse border-b border-slate-200 p-6 bg-dark'>
                <nav className='max-w-5xl flex-1  items-center justify-between hidden mx-auto md:flex gap-2 p-4 '>
                    
                    <NavLink to="/" className={linkClass}>Головна</NavLink>
                    <NavLink to="/services" className={linkClass}>Послуги</NavLink>
                    <NavLink to="/pricing" className={linkClass}>Ціни</NavLink>
                    <NavLink to="/contacts" className={linkClass}>Контакти</NavLink>
                </nav>
                {isOpen && (
                <nav  className='md:hidden text-center absolute right-0 pb-4 gap-2 top-20 flex flex-col rounded-bl-2xl bg-black/30'>
                    <NavLink to="/" className={linkClass} onClick={()=> setIsOpen(false)}>Головна</NavLink>
                    <NavLink to="/services" className={linkClass} onClick={()=> setIsOpen(false)}>Послуги</NavLink>
                    <NavLink to="/pricing" className={linkClass} onClick={()=> setIsOpen(false)}>Ціни</NavLink>
                    <NavLink to="/contacts" className={linkClass} onClick={()=> setIsOpen(false)}>Контакти</NavLink>
                </nav>
                )}
                <button className='md:hidden text-white text-2xl' onClick={()=> setIsOpen(!isOpen)}  >{isOpen ? '☓' : '☰'}</button>
            </header>
            <main className='flex-1'>
                <Outlet/>
            </main>
            <footer className='border-t bg-dark border-slate-200 p-4 text-center text-primary'>
                © 2026 Business Site
            </footer>
        </div>
    )
}

export default MainLayout