import { Badge} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <NavLink to={'/'} className="navbar-brand" href="#">Navbar</NavLink>
            <button className="navbar-toggler" type="button">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link active" aria-current="page" href="#">Home</NavLink>
                    </li>
                </ul>
                <NavLink to={'/carrito'}>
                    <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge> 
                </NavLink>
               
            </div>
        </div>
    </nav>
  )
}
