import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link , NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
        <link to="/">
        <h1>La Vinoteca Del Chubito</h1>
        </link>
        <nav>
          <ul>
              
        <li><NavLink to='/categoria/1'>Vinos</NavLink></li>
        <li><NavLink to='/categoria/1'>Destilados</NavLink></li>
        <li><NavLink to='/categoria/2'>Cervezas</NavLink></li>
        <li><NavLink to='/categoria/2'>Accesorios</NavLink></li>
            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

