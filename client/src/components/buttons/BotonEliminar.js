import React from 'react'
import { connect } from "react-redux";
import { EliminarItemDeCarrito } from '../../actions/actionProduct'
import swal from 'sweetalert';


function BotonEliminar({ EliminarItemDeCarrito, id, name }) {
    function EliminarItem() {
        EliminarItemDeCarrito(id)
        swal({
            text: 'Se eliminó el producto del carrito!',
            icon: 'error',
            button: 'Aceptar'
        })
    }

    return (
        <div className='botonEliminarItem'>
            <button class="btn btn-danger btn-sm" onClick={EliminarItem}> {/* No colocar parentesis, porque sino lo ejecuta apenas lo renderiza*/}
                {name}
            </button>
        </div>)
}


function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps, { EliminarItemDeCarrito })(BotonEliminar);
