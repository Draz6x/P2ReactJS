import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
        
        <h1>La Vinoteca Del Chubito</h1>
        <nav>
            <ul>
                <li>Vinos</li>
                <li>Destilados</li>
                <li>Cervezas</li>
                <li>Sidra</li>
                <li>Accesorios e Implementos</li>
            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

