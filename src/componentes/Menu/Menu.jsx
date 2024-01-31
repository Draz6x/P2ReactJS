import { Link , NavLink } from "react-router-dom"
import './Menu.css';

const Menu = () => {
  return (
    <header>
        <Link to='/'>
        <h1>Botilleria ElMemo</h1>
        </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/vinos"> Vinos
                        </NavLink>
                    </li>
                    <li><NavLink to="/destilados"> Destilados 
                        </NavLink>
                    </li>
                    <li><NavLink to="/cervezas"> Cervezas 
                        </NavLink>
                    </li>
                    <li><NavLink to="/accesorios"> Accesorios 
                        </NavLink>
                    </li>
                </ul>
            </nav>
    </header>
  )
}

export default Menu