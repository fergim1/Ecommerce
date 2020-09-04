import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux'
import { logOut } from '../../actions/actionProduct'
import LogoMoveNow from './Logo-Move-Now.png'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function NavBar(props) {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark pink lighten-3">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLink exact to="/catalogue" style={{ textDecoration: 'none' }} >
            <img width="30%" src={LogoMoveNow}></img>
          </NavLink>
        </div>

        <div>
          <div class="registrarse-login-carrito">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="list">
                <li className="list-item">
                  {(props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol === 'user') || (props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol === 'admin') ? (
                    <div>
                      <NavLink onClick={props.logOut} exact to='/catalogue' style={{ textDecoration: 'none' }}>LOGOUT</NavLink>
                    </div>
                  ) :
                    (<div>
                      <NavLink exact to="/registro" style={{ textDecoration: 'none' }}>REGISTRATE</NavLink>
                      <NavLink exact to="/login">
                        <PersonIcon/>
                      </NavLink>
                 
                    </div>
                    )}
                  <div>
                  <NavLink exact to="/carrito" >
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={props.carrito.length} color="secondary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                    </NavLink>
                    {/* <NavLink exact to="/carrito" style={{ textDecoration: 'none' }}>CARRITO</NavLink> */}
                  </div>
                  {(props.usuarioLogueado.user !== undefined && props.usuarioLogueado.user.rol === 'admin') ? (
                    <div>
                      <NavLink exact to="/admin" style={{ textDecoration: 'none' }}>ADMIN</NavLink>

                    </div>
                  ) : ('')}

                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    ...state,
    usuarioLogueado: state.usuarioLogueado,
    carrito: state.carrito
  };
}


export default connect(mapStateToProps, { logOut })(NavBar);
