import React from 'react';

function Header() {
    return (
        <div className="my-info px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <img className="my-img" src={require('./images/Mi-foto.png')} />
            <h1 className="lead">Maria Antonia Velasquez Rivera</h1>
            <p>Desarrolladora web en formación</p>
            <a class="btn btn-outline-info" href="#container">Ver proyectos</a>
        </div>
    )
}
export default Header;
