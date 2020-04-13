import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div id="container">
                <div className="content-section-heading text-center">
                    <p>.</p>
                    <h3 className="text-secondary mb-0">Portafolio web / proyectos</h3>
                    <p>.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card1">
                            <div className="card-body">
                                <h5 className="card-title"> Página tributo</h5>
                                <h6 className="card-text">tema: NASA</h6>
                            <a class="btn btn-outline-danger" href="https://mariaa06.github.io/tribute-page/" target="_blank">Ver</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2">
                            <div className="card-body">
                                <h5 className="card-title"> Formulario </h5>
                                <h6 className="card-text">tema: Planetario de Medellín</h6>
                            <a class="btn btn-outline-secondary" href="https://mariaa06.github.io/formulario/" target="_blank">Ver</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card3">
                            <div className="card-body">
                                <h5 className="card-title"> Landing page</h5>
                                <h6 className="card-text">tema: Floristería Sunflower</h6>
                            <a class="btn btn-outline-primary" href="https://mariaa06.github.io/landing_page/" target="_blank">Ver</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card4">
                            <div className="card-body">
                                <h5 className="card-title">Documento </h5>
                                <h6 className="card-text">tema: SpaceX</h6>
                            <a class="btn btn-outline-success" href="https://mariaa06.github.io/TDPage/" target="_blank">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;