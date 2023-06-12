import React from 'react'
import { routes, Route, NavLink, BrowserRouter, Routes } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Acerca } from '../components/Acerca'
import { Contacto } from '../components/Contacto'
import { Login } from '../components/Login'

export const Approuter = () => {
  return (
    <BrowserRouter>

        {/**NAV MENU */}
        <header>
          <nav>
			<div className='logo'>
				<h2>React CONTEXT</h2>
			</div>
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/articulos">Articulos</NavLink></li>
              <li><NavLink to="/acerca-de">Acerca</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/asd">404</NavLink></li>
            
            </ul>
          </nav>
        </header>
        {/* CONFIG ROUTES */}
		<section className='content'>
			<Routes>
				<Route path='/' element={<Inicio/>}/>
				<Route path='/inicio' element={<Inicio/>}/>
				<Route path='/articulos' element={<Articulos/>}/>
				<Route path='/acerca-de' element={<Acerca/>}/>
				<Route path='/contacto' element={<Contacto/>}/>
				<Route path='/login' element={<Login/>}/>

				<Route path='*' element={
					(<div><h1>ERROR 404 NOT FOUND</h1></div>)
				}/>
			</Routes>
		</section>
    </BrowserRouter>
  )
}
