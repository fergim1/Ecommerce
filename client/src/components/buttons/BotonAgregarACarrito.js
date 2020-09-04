import React from 'react'
import {connect} from "react-redux";
import {agregarItemACarrito} from '../../actions/actionProduct'
import swal from 'sweetalert';

function BotonAgregarACarrito ({agregarItemACarrito, id, name}) {
    function AgregarItem(){
        agregarItemACarrito(id)
        if (name === 'Agregar al carrito') {
        swal({
            text: 'Se agregó al carrito con éxito!',
            icon: 'success',
            button: 'Aceptar'
        })
    }
    }

    return (
    <div className='botonAgregarACarrito'>
        <button class="btn btn-primary btn-sm" onClick={AgregarItem}>
             {name}
        </button>
    </div>)
}


function mapStateToProps(state) {
    return {
    };
  }


export default connect (mapStateToProps, {agregarItemACarrito} )(BotonAgregarACarrito);
