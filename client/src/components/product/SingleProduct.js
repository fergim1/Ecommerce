import React from 'react';
import { Link } from 'react-router-dom'
import './SingleProduct.css';
import BotonAgregarACarrito from '../buttons/BotonAgregarACarrito'



export default class Product extends React.Component {


    render() {
        return (
            <div className='all'>
                <img src={this.props.image} alt='' height='200' ></img>
                <Link to={'/catalog/' + this.props.id} style={{ textDecoration: 'none' }}>
                    <h2 className="name">{this.props.name}</h2>
                </Link>
                <p>{this.props.description}</p>
                <h4 className="price">Precio: ${this.props.price}</h4>
                <BotonAgregarACarrito id={this.props.id} name='Agregar al carrito' />
            </div>
        );
    }
}
