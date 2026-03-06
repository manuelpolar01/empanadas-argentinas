import '../css/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa';

function FooterPeru() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* Marca */}
          <div className="col-md-4 mb-4">
            <a href="/" className="footer-brand">
              Ristorante Argentino
            </a>

            <p className="footer-text">
              Autentica cucina peruviana, ingredienti freschi e tradizione in ogni piatto.
            </p>
          </div>

          {/* Dirección */}
          <div className="col-md-4 mb-4">
            <h5>Indirizzo</h5>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Santo+Stefano+18,+Verbania"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link map-link"
            >
              <FaMapMarkerAlt />

              <span>
                Via Santo Stefano 18 <br />
                28921 Verbania (VB) <br />
                Italia
              </span>
            </a>
          </div>

          {/* Redes */}
          <div className="col-md-4 mb-4">
            <h5>Contatti</h5>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/393317227085?text=Ciao%20vorrei%20ricevere%20informazioni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Ristorante Argentino.  
            Tutti i diritti riservati.
          </div>

          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/termini">Termini</a>
            <a href="/cookie">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPeru;