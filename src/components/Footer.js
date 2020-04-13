import React from 'react';

function Footer() {
    return (
        <footer class="container py-5">
            <div class="row">
                <div class="col-12 col-md">
                    <small class="d-block mb-3 text-muted">Contacto</small>
                </div>
                <div class="col-6 col-md">
                <a className="redes" href="https://github.com/mariaa06" target="_blank">GitHub</a>
                </div>
                <div class="col-6 col-md">
                <a className="redes" href="https://www.linkedin.com/in/maria-antonia-a634b41a2/" target="_blank">LinkedIn</a>
                </div>
                <div class="col-6 col-md">
                <a className="redes" href="https://facebook.com/mavrfh" target="_blank">Facebook</a>
                </div>
                <div class="col-6 col-md">
                <p className="redes">mariaavr.0602@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;