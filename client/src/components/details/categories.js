import React, { Component } from "react";
import { connect } from "react-redux";
// import './categories.css';
import { addCategory } from '../../actions/actionProduct'
import swal from 'sweetalert';



class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }
  handleChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addCategory(this.state.category);
    swal({
      text: 'Se creó la categoría con éxito!',
      icon: 'success',
      button: 'Aceptar'
    })
  }

  render() {
    const { category } = this.state;
    return (
      <div class='container'>
              <h2>Agregar Categoría</h2>
        <form class="form-categories" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              placeholder="Categoría"
              type="text"
              id="category"
              autoComplete="off"
              value={category}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <p>   </p>
          <div>
            <button class="btn btn-primary btn-sm" type="submit">Agregar</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, { addCategory })(Categories);
